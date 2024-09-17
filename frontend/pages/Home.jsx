import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import Scoreboard from '../component/scoreboard';
import Livedata from '../component/livedata';

const NahoImage = require('../image_dev/Naho.png');
const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Logique d'appel API ou autre
  }, []);

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>{error?.message || 'An error occurred'}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={NahoImage} style={styles.baniere} />
      
      <View style={styles.content}>
        <View style={styles.scoreboardContainer}>
          <Scoreboard />
        </View>
        <View style={styles.livedataContainer}>
          <Livedata />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  baniere: {
    height: height * 0.13,
    width: '100%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    flexDirection: 'row', // Arrange les éléments côte à côte
  },
  scoreboardContainer: {
    flex: 7, // 8/10 de l'espace
    backgroundColor: 'white', // Couleur de fond pour voir la séparation
  },
  livedataContainer: {
    flex: 3, // 2/10 de l'espace
    backgroundColor: 'gray', // Couleur de fond pour voir la séparation
  },
  error: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default HomeScreen;
