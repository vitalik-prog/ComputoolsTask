import React, { useEffect } from 'react'
import {StatusBar, View} from 'react-native'
import { useDispatch } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useAppSelector } from '../hooks'
import { SignIn } from '../screens'
import {AppDarkColor, AppLightColor, AppTheme, DataStatus, NavigationScreen} from '../common/enums'
import { RootStackParamList } from '../common/types'
import {darkTheme, lightTheme} from "../common/constants";
import { TabNavigation } from './components'
import { Spinner } from '../components'
import { getCurrentUser } from '../store/actions'
import styles from './styles'

const Stack = createStackNavigator<RootStackParamList>()

const StackNavigation: React.FC = () => {
  const { user, dataStatus, theme } = useAppSelector(({ auth, theme }) => ({
    user: auth.user,
    dataStatus: auth.dataStatus,
    theme: theme.theme
  }))
  const dispatch = useDispatch()

  const hasUser = Boolean(user)
  const isLoading = dataStatus === DataStatus.PENDING
  const isThemeDark = theme === AppTheme.DARK

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [])

  if (isLoading) {
    return (
      <View style={styles.spinnerContainer}>
        <Spinner />
      </View>
    )
  }

  return (
    <NavigationContainer
      theme={isThemeDark ? darkTheme : lightTheme}
    >
      <StatusBar
        backgroundColor={isThemeDark ? AppDarkColor.BACKGROUND : AppLightColor.BACKGROUND}
        barStyle={isThemeDark ? 'light-content' : 'dark-content'}
      />
      <Stack.Navigator
        screenOptions={{
          cardStyle: {backgroundColor: '#fff'},
          headerShown: false
        }}
      >
        {hasUser ? (
          <Stack.Screen
            name={NavigationScreen.TO_TABS_NAVIGATOR}
            component={TabNavigation}
          />
        ) : (
          <Stack.Screen name={NavigationScreen.SIGN_IN} component={SignIn}/>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation
