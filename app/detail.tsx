import { View, Text } from 'react-native'
import React from 'react'
import common from '@/styles/common'

const detail = () => {
  return (
    <View style={common.screen}>
        <View style={common.container}>
            <Text style={{textAlign:'center'}}>
                detail
            </Text>
        </View>
    </View>
  )
}

export default detail