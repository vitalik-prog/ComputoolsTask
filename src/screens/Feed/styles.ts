import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

type Styles = {
  container: ViewStyle
  flatList: ViewStyle
  flatListFooter: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    paddingHorizontal: 25,
  },
  flatList: {
    width: '100%',
    paddingTop: 25
  },
  flatListFooter: {
    flex: 1,
    paddingBottom: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles
