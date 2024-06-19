import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '../components/SearchBar'
import HomeRecipe from '../components/HomeRecipe'

const recipes = () => {
  return (
  
   
      <SafeAreaView >
 
      <View className="w-full justify-center h-full px-4 my-3"> 
      <Text className="text-2xl text-orange-900 text-semibold font-psemibold">Feeling Spontaneous?</Text>
      <SearchBar />
      <HomeRecipe />
      </View>
 
    </SafeAreaView>
  )

}



export default recipes