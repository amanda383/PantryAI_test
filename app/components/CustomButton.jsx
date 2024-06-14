import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity
    onPress={handlePress}
    activeOpacity={0.7}
    disabled={isLoading}
     className={`rounded-xl min-h-[62px] justify-center items-center bg-orange-400 ${containerStyles} ${isLoading ? 'opacity-50' : ''}`} >
      <Text className={`text-black font-psemibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton