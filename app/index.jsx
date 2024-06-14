import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Image } from 'react-native';
import {Redirect, router} from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from "../constants";
import CustomButton from './components/CustomButton';
import { useGlobalContext } from "../context/GlobalProvider";



export default function App() {

  const { loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/home" />;
  return (
    //login page
    <SafeAreaView className="bg-orange-200 h-full">
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image 
            source={images.logo} 
            className="w-[230px] h-[84px]"
            resizeMode="contain"
          />

          <Image
            source={images.robot}
            className="max-w-[380px] w-full h-[30%] "
            resizeMode='contain'
          />


          <View className="relative mt-">
            <Text className="text-3xl text-orange-900 font-pmedium text-center">Put on your cooking hats and <Text style={{ color:'#FFA001' }}>PantryAI</Text> </Text>

            <CustomButton
              title="Continue with Email"
              handlePress={()=>router.push('./sign-in')}
              containerStyles="mt-7"
              />
          </View>



        </View>
      </ScrollView>

      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  );
}

