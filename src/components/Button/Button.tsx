import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { ACTIVE_OPACITY } from '../../common/constants'
import styles from './styles'

type Props = {
  label: string
} & TouchableOpacityProps

const Button: React.FC<Props> = ({
  label,
  ...props
}) => {

  return (
    <TouchableOpacity
      {...props}
      style={styles.touchable}
      activeOpacity={ACTIVE_OPACITY}
    >
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  )
}

export default Button
