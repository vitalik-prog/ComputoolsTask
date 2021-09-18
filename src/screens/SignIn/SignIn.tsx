import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {KeyboardAvoidingView, ScrollView, Switch, Text, View} from 'react-native'
import { useTheme } from '@react-navigation/native';
import {UserSignInPayload} from '../../common/types'
import {Button, Input,} from '../../components'
import {SignInValidationSchema} from './validationSchema'
import {changeTheme, signIn} from '../../store/actions'
import styles from './styles'
import {AppDarkColor, AppLightColor, AppTheme} from "../../common/enums/app";

const SignIn: React.FC = () => {
  const dispatch = useDispatch()
  const { colors, dark } = useTheme();

  const [authData, setAuthData] = useState({ email: '', password: '' })
  const [error, setError] = useState({ path: '', message: '' })

  const handleSubmit = (): void => {
    SignInValidationSchema.validate({ ...authData })
      .then((payload: UserSignInPayload) => {
        dispatch(signIn(payload))
      })
      .catch((err) => {
        setError({ path: err.path, message: err.message})
      })
  }

  const setEmail = (text:string) => {
    setError({ path: '', message: '' })
    setAuthData({...authData, email: text})
  }

  const setPassword = (text:string) => {
    setError({ path: '', message: '' })
    setAuthData({...authData, password: text})
  }

  const switchTheme = () => {
    dispatch(changeTheme())
  }

  return (
    <KeyboardAvoidingView
      style={[styles.keyBoardAvoidContainer, { backgroundColor: colors.background }]}
      behavior="height"
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View>
          <Input
            style={[styles.input, { color: colors.text, borderColor:colors.notification }]}
            placeholder="Email"
            placeholderTextColor={colors.text}
            returnKeyType="next"
            value={authData.email}
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
          />
          <Text style={styles.errorText}>{error.path === 'email' ? error.message : ''}</Text>
          <Input
            style={[styles.input, { color: colors.text, borderColor:colors.notification }]}
            placeholder="Password"
            placeholderTextColor={colors.text}
            returnKeyType="done"
            value={authData.password}
            onChangeText={setPassword}
            isSecure
          />
          <Text style={styles.errorText}>{error.path === 'password' ? error.message : ''}</Text>
          <View style={styles.changeThemeWrapper}>
            <Text style={{color: colors.text}}>
              {`Enable ${dark ? AppTheme.LIGHT : AppTheme.DARK} theme`}
            </Text>
            <Switch
              trackColor={{
                false: AppLightColor.BACKGROUND,
                true: AppDarkColor.BACKGROUND
              }}
              thumbColor={colors.card}
              ios_backgroundColor="#3e3e3e"
              onValueChange={switchTheme}
              value={!dark}
            />
          </View>
        </View>
        <View style={styles.bottomBlock}>
          <Button
            label="Login"
            onPress={handleSubmit}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default SignIn
