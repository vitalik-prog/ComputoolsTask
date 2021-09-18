import React from 'react'
import { View, ActivityIndicator, ViewStyle } from 'react-native'
import {AppDarkColor, AppLightColor} from '../../common/enums'
import { SpinnerSize } from './common/enum'
import styles from './styles'

type Props = {
  wrapperStyle?: ViewStyle
  color?: AppDarkColor | AppLightColor
  size?: SpinnerSize
}

const Spinner: React.FC<Props> = (props) => {
  const {
    wrapperStyle = styles.defaultWrapper,
    color = AppDarkColor.BACKGROUND,
    size = SpinnerSize.LARGE
  } = props

  return (
    <View style={wrapperStyle}>
      <ActivityIndicator size={size} color={color} />
    </View>
  )
}

export default Spinner
