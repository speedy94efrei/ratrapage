import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const HomePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.titleBlueItalic}>The Legend of Xefi</Text>
        <Text style={styles.titleBlue}>Bienvenue dans les Terres de Xefi</Text>
        <Text style={styles.descriptionBlue}>
          Plongez dans le monde enchanté de Legends of Xefi, un jeu de rôle épique qui vous emmène au cœur d'une saga héroïque où le destin de nombreux royaumes est en jeu.
 
Dans ce monde peuplé de créatures mythiques, de guerriers valeureux et de magiciens aux pouvoirs incommensurables, chaque choix que vous faites peut changer le cours de l'histoire.
        </Text>
      </View>
      <View style={styles.backgroundContainer}>
        <Text style={styles.loreTitle}>L'histoire de notre monde</Text>
        <Text style={styles.loreText}>
          Rencontrez des Personnages Inoubliables {'\n\n'}
          Xefi est peuplée de personnages complexes dotés de leurs propres histoires et motivations. {'\n\n'}
          Forgez des alliances ou rivalisez avec des héros et des antagonistes qui ne sont pas toujours ce qu'ils semblent être. {'\n\n'}
          Votre capacité à interagir avec ces personnages déterminera votre capacité à réussir dans les quêtes et à influencer le monde autour de vous.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
  },
  textContainer: {
    marginTop: height * 0.05, // Montée du texte de la partie blanche
    marginBottom: 20,
  },
  titleBlueItalic: {
    fontSize: 28, // Taille du titre
    fontStyle: 'italic', // Mise en italique
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#3B5998', // Couleur bleue
  },
  titleBlue: {
    fontSize: 28, // Taille du titre
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#3B5998', // Couleur bleue
  },
  descriptionBlue: {
    fontSize: 18,
    textAlign: 'center',
    color: '#3B5998', // Couleur bleue
  },
  backgroundContainer: {
    position: 'absolute',
    top: height * 0.50,
    left: 0,
    right: 0,
    height: height * 0.45,
    backgroundColor: '#3B5998',
    borderRadius: 30,
    padding: 20,
    paddingHorizontal: 30,
  },
  loreTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  loreText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'justify',
  },
});

export default HomePage;
