import { StyleSheet, ViewStyle } from 'react-native'
import {AppDarkColor, AppLightColor} from "./src/common/enums/app";

interface Styles {
  safeArea: ViewStyle
}

export default StyleSheet.create<Styles>({
  safeArea: {
    height: '100%',
  },
})
