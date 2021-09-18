import React, {useEffect, useState} from 'react'
import { View, FlatList } from 'react-native'
import { useDispatch} from "react-redux";
import { useAppSelector } from "../../hooks";
import { loadPhotos, resetState as resetPhotosStateAction } from '../../store/actions';
import { Photo } from "../../common/types";
import PhotoItem from './components/PhotoItem';
import {
  CLEARANCE_FOR_ADDITIONAL_LOADING,
  DEFAULT_PAGE,
  DEFAULT_PHOTOS_LIMIT,
  DEFAULT_PHOTOS_PAGINATION
} from './common/constants';
import { DataStatus } from '../../common/enums';
import {NotFound, Spinner } from '../../components';
import styles from './styles'

const Feed: React.FC = () => {
  const { photos, dataStatus } = useAppSelector(({ feed }) => ({
    photos: feed.photos,
    dataStatus: feed.dataStatus
  }))
  const [pageNumber, setPageNumber] = useState(1)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const dispatch = useDispatch()

  const isPhotosFetching = dataStatus === DataStatus.PENDING

  const fetchPhotos = (pagination = DEFAULT_PHOTOS_PAGINATION) => {
    dispatch(
      loadPhotos({
        filter: pagination
      })
    )
    setPageNumber(pageNumber + 1)
  }

  const refreshPhotos = () => {
    setIsRefreshing(true)
    dispatch(resetPhotosStateAction())
    fetchPhotos({ limit: photos.length, page: DEFAULT_PAGE })
    setIsRefreshing(false)
  }

  useEffect(() => {
    setPageNumber(2)
    fetchPhotos()
    return () => {
      dispatch(resetPhotosStateAction())
    }
  }, [])

  const keyExtractor = (item: Photo) => item.id.toString()

  const renderItem = ({ item }: { item: Photo }) => (
    <PhotoItem
      photo={item}
    />
  )

  const renderFooterComponent = () => {
    return isPhotosFetching ? <Spinner /> : null
  }

  const renderEmptyComponent = () => {
    return isPhotosFetching ? (
      <Spinner />
    ) : (
      <NotFound label="Oops. There is no photos here" />
    )
  }

  return (
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={photos}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ListEmptyComponent={renderEmptyComponent}
          contentContainerStyle={styles.flatList}
          onEndReachedThreshold={CLEARANCE_FOR_ADDITIONAL_LOADING}
          onEndReached={() => fetchPhotos({ page: pageNumber, limit: DEFAULT_PHOTOS_LIMIT })}
          refreshing={isRefreshing}
          onRefresh={refreshPhotos}
          ListFooterComponent={renderFooterComponent}
          ListFooterComponentStyle={styles.flatListFooter}
        />
      </View>
  )
}

export default Feed
