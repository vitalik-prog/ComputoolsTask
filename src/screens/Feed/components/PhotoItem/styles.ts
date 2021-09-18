import { StyleSheet, ImageStyle, ViewStyle, TextStyle } from 'react-native'

type Styles = {
  container: ImageStyle
  textWrapper: ViewStyle
  text: TextStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    justifyContent: 'flex-end',
    height: 200,
    backgroundColor: '#EEE',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20
  },
  textWrapper: {
    backgroundColor: 'rgba(0, 0, 0, .5)',
    height: 45,
    paddingLeft: 20,
    justifyContent: "center"
  },
  text: {
    color: 'white'
  }
})

export default styles
