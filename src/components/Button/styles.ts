import { StyleSheet } from 'react-native'
import { AppDarkColor } from '../../common/enums'
import { Styles } from './common/types'

const styles = StyleSheet.create<Styles>({
  touchable: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 58,
    paddingHorizontal: 15,
    borderRadius: 18,
    backgroundColor: AppDarkColor.BUTTON,
    width: '100%'
  },
  text: {
    fontSize: 18,
    color: AppDarkColor.TEXT
  }
})

export default styles
