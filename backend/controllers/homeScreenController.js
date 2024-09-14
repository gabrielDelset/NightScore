// Fonction pour gérer la requête GET sur /api/homescreen
const getHomeScreen = (req, res) => {
  res.send({ message: 'Page HomeScreen' });
};

const getList = (req, res) => {
  const joueurs = [
      {  nom: 'Joueur 1', score: 92 },
      {  nom: 'Joueur 2', score: 95 },
      {  nom: 'Joueur 3', score: 90 },
      {  nom: 'Joueur 4', score: 85 },
      {  nom: 'Joueur 5', score: 80 }
  ];

  res.send({ joueurs: joueurs });
};

module.exports = {
  getHomeScreen,
  getList 
};
