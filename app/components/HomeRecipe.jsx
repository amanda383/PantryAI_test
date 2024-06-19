import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, SafeAreaView, StyleSheet, Image, Button, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { SPOONACULAR_API_KEY } from '@env';

const HomeRecipe = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetching random recipes from API
  const fetchRandomRecipes = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/random`, {
        params: {
          number: 10,
          apiKey: SPOONACULAR_API_KEY,
        },
      });
      setResults(response.data.recipes);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomRecipes();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
            //displaying recipe cards
          results.map((recipe) => (
            <View key={recipe.id} style={styles.card}>
              <Image source={{ uri: recipe.image }} style={styles.image} />
              <Text style={styles.title}>{recipe.title}</Text>
            </View>
          ))
        )}
        <Button title="Fetch New Recipes" onPress={fetchRandomRecipes} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f8f8f8',
    shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    elevation: 1,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },

});

export default HomeRecipe;
