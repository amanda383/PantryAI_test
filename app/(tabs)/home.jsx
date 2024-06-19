import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import { useState } from 'react';
import { router } from 'expo-router'

const Home = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit =()=>{
    //rouuted to create page where they are able take picture of images
    router.replace('/create');
    setIsSubmitting(true);
  }



  return (
    //features: in home has button to go to create
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <Text style={styles.title}>Welcome to PantryAI</Text>
          <View style={styles.content}>
            <Text style={styles.subtitle}>Looking for a delicious meal?</Text>
            <Text style={styles.description}>Just scan your fridge and let our chefbots do the work</Text>
          
           <View>
            <CustomButton 
               title="Create Now"
                handlePress={submit}
                containerStyles="mt-7 w-100 px-10"
            
            /> 
             
       
           </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#CDCDE0', // Set your desired background color
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFA001',
    marginBottom: 20,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'Poppins'
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Poppins'
  },
});

export default Home;
