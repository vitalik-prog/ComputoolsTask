import React from 'react'
import {Text, View} from 'react-native'
import styles from './styles'

type Props = {
  label: string
}

const NotFound: React.FC<Props> = ({ label }) => {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
    </View>
  )
}

export default NotFound
