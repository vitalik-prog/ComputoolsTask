import React from 'react'
import {Image, Linking, Text, TouchableOpacity, View} from 'react-native'
import {useDispatch} from "react-redux";
import {useTheme} from "@react-navigation/native";
import {Button} from "../../components";
import {AppTheme} from "../../common/enums/app";
import {changeTheme, resetUser} from '../../store/actions';
import {useAppSelector} from "../../hooks";
import {ACTIVE_OPACITY} from '../../common/constants';
import styles from './styles'

const Profile: React.FC = () => {
  const {user} = useAppSelector(({auth}) => ({
    user: auth.user,
  }))
  const dispatch = useDispatch()
  const { colors, dark } = useTheme();
  const handleLogout = () => {
    dispatch(resetUser())
  }

  const handleOpenMail = async () => {
    await Linking.openURL(`mailto://${user?.data.email}}`)
  }

  const handelChangeTheme = () => {
    dispatch(changeTheme())
  }

  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <View>
          <Image
            width={118}
            height={118}
            source={{uri: user?.data.avatar}}
            style={styles.image}
          />
        </View>
        <View style={styles.nameContainer}>
          <Text style={[styles.textName, { color: colors.text }]}>{`${user?.data.first_name} ${user?.data.last_name}`}</Text>
          <View style={styles.userContacts}>
            <TouchableOpacity
              activeOpacity={ACTIVE_OPACITY}
              style={styles.userInfoItem}
              onPress={handleOpenMail}
            >
              <Text style={{ color: colors.text }}>{user?.data.email}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.changeThemeBtn}>
          <Button
            label={`Change theme to: ${dark ? AppTheme.LIGHT : AppTheme.DARK}`}
            onPress={handelChangeTheme}
          />
        </View>
        <Button
          label='Logout'
          onPress={handleLogout}
        />
      </View>
    </View>
  )
}

export default Profile
