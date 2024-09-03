// MyReactNativeApp/screens/HomeScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// Exemple de données de joueurs
const players = [
  { name: 'Player 1', score: 100 },
  { name: 'Player 2', score: 90 },
  { name: 'Player 3', score: 80 },
  { name: 'Player 4', score: 150 },
  { name: 'Player 5', score: 60 },
];

const HomeScreen = () => {
  const renderItem = ({ item, index }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{index + 1}</Text>
      <Text style={styles.cell}>{item.name}</Text>
      <Text style={styles.cell}>{item.score}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tableau des Scores</Text>
      <View style={styles.tableHeader}>
        <Text style={styles.headerCell}>Position</Text>
        <Text style={styles.headerCell}>Nom</Text>
        <Text style={styles.headerCell}>Score</Text>
      </View>
      <FlatList
        data={players}
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
    backgroundColor: '#fff',
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
});

export default HomeScreen;
