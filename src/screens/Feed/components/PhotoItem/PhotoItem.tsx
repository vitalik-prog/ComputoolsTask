import React from 'react'
import {ImageBackground} from 'react-native';
import {View, ScrollView, Image, Text} from 'react-native'
import {Photo} from "../../../../common/types/photo";
import styles from './styles'

type Props = {
  photo: Photo
}

const PhotoItem: React.FC<Props> = ({photo}) => {

  return (
    <ImageBackground source={{uri: photo.download_url}} style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>
          { photo.author }
        </Text>
      </View>
    </ImageBackground>
  )
}

export default PhotoItem
