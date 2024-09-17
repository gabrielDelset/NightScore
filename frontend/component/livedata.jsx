import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import { getlist } from '../tools/API/api'; // Chemin relatif basé sur la structure du projet
const { width, height } = Dimensions.get('window'); // Récupère la largeur et la hauteur de l'écran

const Livedata = () => {
  const [players, setPlayers] = useState([]); // Utiliser useState pour stocker les joueurs
  const [error, setError] = useState(null); // État pour gérer les erreurs

  // Utiliser useEffect pour récupérer les données lors du premier rendu
  useEffect(() => {
    // Fonction pour appeler l'API
    const fetchPlayers = async () => {
      try {
        const response = await getlist();
        console.log(response);
        setPlayers(response.joueurs); 
      } catch (err) {
        setError(err); // Gérer les erreurs éventuelles 
      }
    };

    fetchPlayers();
  }, []);

  const renderItem = ({ item, index }) => (
    <View style={styles.row}>
      <Text style={styles.cellName}>{item.nom}</Text>
      <Text style={styles.cellScore}>{item.score}</Text>
    </View>
  );

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>{error?.message || 'An error occurred'}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.tableHeader}>
        <Text style={styles.headerCellScore}></Text>
      </View>
      <FlatList
        data={players} // Utiliser les données récupérées
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
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
    alignItems: 'center', // Correction du centrage
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: 'white',
  },
  tableHeader: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  headerCellPosition: {
    flex: 1, // 1/10 de l'espace
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
  headerCellName: {
    flex: 6, // 6/10 de l'espace
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
  headerCellScore: {
    flex: 3, // 3/10 de l'espace
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cellPosition: {
    flex: 1, // 1/10 de l'espace
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
  },
  cellName: {
    flex: 6, // 6/10 de l'espace
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
  },
  cellScore: {
    flex: 3, // 3/10 de l'espace
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
  },
  error: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Livedata;
