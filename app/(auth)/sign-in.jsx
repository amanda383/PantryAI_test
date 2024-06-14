import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../components/FormField'
import { useState } from 'react'
import CustomButton from '../components/CustomButton'
import { Link,router, Redirect } from 'expo-router'
import {getCurrentUser, signIn } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";


const SignIn = () => {
  const { setUser, setIsLogged } = useGlobalContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async () => {
    if (!form.email || !form.password) {
        Alert.alert('Error', 'Please fill in all the fields');
        return;
    }

    setIsSubmitting(true);
    try {
        await signIn(form.email, form.password);
        const result = await getCurrentUser();
        setUser(result);
        setIsLogged(true);
        
        router.replace('/home');
    } catch (error) {
        Alert.alert('Error', error.message);
    } finally {
        setIsSubmitting(false); // Ensure the loading state is reset
    }
};

  return (
    <SafeAreaView className="bg-orange-200 h-full">
  <ScrollView>
      <View className="w-full justify-center h-full px-4 my-6"> 
        <Image 
          source={images.logo}
          resizeMode='contain' className="w-[115px] h-[35px]"
        />
        <Text className="text-2xl text-orange-900 text-semibold mt-10 font-psemibold">Log in to GourmetGaze</Text>
      
      <FormField
        title="Email"
        value={form.email}
        handleChangeText={(e)=>setForm({...form,
          email:e
        })}
        otherStyles="mt-7"
        keyboardType="email-address"
      />
       <FormField
        title="Password"
        value={form.password}
        handleChangeText={(e)=>setForm({...form,
          password:e
        })}
        otherStyles="mt-7"
       
      />

      <CustomButton 
        title="Sign In"
        handlePress={submit}
        containerStyles="mt-7"
        isLoading={isSubmitting}
      />


      <View className="justify-center pt-5 flex-row gap-2">
        <Text className="text-lg text-orange-900 font-pregular">Don't have an account?</Text>
        <Link href="/sign-up" className='text-lg font-psemibold' style={{ color:'#FFA001' }}>Sign-Up</Link>

      </View>
      </View>
       </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn