import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

type Styles = {
  container: ViewStyle
  userInfoContainer: ViewStyle
  image: ImageStyle
  nameContainer: TextStyle
  textName: TextStyle
  userInfoItem: ViewStyle
  userContacts: ViewStyle
  changeThemeBtn: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    padding: 20,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  userInfoContainer: {
    marginTop: 25,
    flexDirection: 'row'
  },
  image: {
    width: 118,
    height: 118,
    borderRadius: 59
  },
  nameContainer: {
    marginLeft: 30
  },
  textName: {
    fontSize: 22
  },
  userInfoItem: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  userContacts: {
    marginTop: 5
  },
  changeThemeBtn: {
    marginBottom: 15
  }
})

export default styles
