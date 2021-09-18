import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

type Styles = {
  keyBoardAvoidContainer: ViewStyle
  scrollView: ViewStyle
  input: TextStyle
  bottomBlock: TextStyle
  errorText: TextStyle
  changeThemeWrapper: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  keyBoardAvoidContainer: {
    flex: 1,
    padding: 25
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'space-between'
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
    height: 58,
    paddingHorizontal: 24,
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 12
  },
  bottomBlock: {
    alignItems: 'center',
    marginBottom: 25
  },
  errorText: {
    height: 20,
    color: 'red',
    marginLeft: 25
  },
  changeThemeWrapper: {
    flexWrap: "wrap",
    flexDirection: "row",
    width: '100%',
    alignItems: "center",
    justifyContent: "flex-end"
  },
})

export default styles
