import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import CustomButton from '../components/CustomButton';
import { useRouter } from 'expo-router';

const Create = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const router = useRouter();

  const submit = () => {
    // Routed to create page where they can take pictures of images
  
    setIsSubmitting(true);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <Text style={styles.title}>Let's look into your pantry</Text>
          <TouchableOpacity style={styles.content} onPress={submit}>
            <View style={styles.buttonContainer}>
              <Text style={styles.upload}>Upload Here</Text>
            </View>
            <Text>Press here to scan your fridge</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
   
  },
  scrollViewContent: {
    flexGrow: 0.5,
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
  upload:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    padding: 30,
    borderRadius: 10,
    fontWeight:'bold',
    aspectRatio: 1,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  }
});

export default Create;
