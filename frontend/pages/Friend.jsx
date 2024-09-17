import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Dimensions, Image } from 'react-native';
import { getlist } from '../tools/API/api'; // Chemin relatif basé sur la structure du projet
import Livedata from '../component/livedata'
const NahoImage = require('../image_dev/Naho.png');


const { width, height } = Dimensions.get('window'); // Récupère la largeur et la hauteur de l'écran

const Friend = () => {
  const [players, setPlayers] = useState([]); // Utiliser useState pour stocker les joueurs
  const [error, setError] = useState(null); // État pour gérer les erreurs

  // Utiliser useEffect pour récupérer les données lors du premier rendu
  useEffect(() => {
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
      <Livedata/> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'black', 
  },
  baniere: {
    height: height * 0.13, // Hauteur à 10% de la hauteur de l'écran
    width: '100%', // Prend toute la largeur de l'écran
    backgroundColor: 'red', // couleur de fond rouge
    justifyContent: 'center', // centrer le texte verticalement
    alignItems: 'center', // centrer le texte horizontalement
  },
  baniereText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  tableHeader: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
  },
  error: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Friend;
