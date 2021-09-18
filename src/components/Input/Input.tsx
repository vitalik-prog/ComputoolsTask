import React from 'react'
import { TextInput, TextInputProps, TextStyle } from 'react-native'

type Props = {
  hasMultipleRows?: boolean
  isSecure?: boolean
  style?: TextStyle
} & TextInputProps

const Input: React.FC<Props> = ({
  isSecure = false,
  hasMultipleRows = false,
  style,
  ...props
}) => {
  return (
    <TextInput
      {...props}
      style={style}
      multiline={hasMultipleRows}
      secureTextEntry={isSecure}
    />
  )
}

export default Input
