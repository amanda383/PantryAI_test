import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import {SPOONACULAR_API_KEY} from  '@env'

const SearchBar = () => {

    const[searchQuery, setSearchQuery]=useState('');
    const [results,setResults]=useState([]);
    const [loading, setLoading]=useState(false);

    //fetching recipes from api 
    const fetchRecipes = async (query) =>{
        if(!query){
            setResults([]);
            return;
        }
        setLoading(true);
        try {
            //fetching api for searching recipes
            const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
                //applying parameters to fetch api 
                params: {
                  query,
                  number: 10,
                  apiKey: SPOONACULAR_API_KEY,
                },
              });
              setResults(response.data.results);
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }
    }
    
    const handleSearch = (query) => {
        setSearchQuery(query);

        if(query === ''){
            setResults([]); //clear results
        }else{
        fetchRecipes(query);
        }
    }


    return (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Search any recipes"
            value={searchQuery}
            onChangeText={handleSearch}
          />
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <FlatList
              data={results}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.item}>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
              )}
            />
          )}
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        margin: 10,
        flex: 1,
      },
      input: {
        height: 50,
        borderRadius: 20,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
      },
      item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      title: {
        fontSize: 18,
      },
    });


export default SearchBar