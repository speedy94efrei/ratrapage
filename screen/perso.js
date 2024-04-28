import React, { useEffect, useState } from 'react';
import { StatusBar, Text, View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      const response = await fetch('http://api-fantasygame.eu-4.evennode.com/get-characters');
      const data = await response.json();
      setCharacters(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const renderCharacterCard = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.rarity}>Rareté: {item.rarity}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.titleContainer}>
        <Text style={[styles.title, { color: '#3B5998' }]}>Legend of Xefi</Text>
      </View>
      {isLoading ? (
        <ActivityIndicator size="large" color="#ffffff" />
      ) : (
        <FlatList
          data={characters}
          renderItem={renderCharacterCard}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.flatList}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Fond blanc
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  flatList: {
    flexGrow: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#3B5998', // Fond bleu
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#ffffff',
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
    color: '#ffffff',
  },
  rarity: {
    fontSize: 14,
    color: '#ffffff',
  },
});

export default CharacterList;
