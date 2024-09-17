// Importer le package pg pour se connecter à PostgreSQL
const { Pool } = require('pg');

// Configuration de la connexion à PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'nightscore',
  password: 'Ewokkk123*',
  port: 5432, // par défaut, PostgreSQL utilise le port 5432
});

// Fonction pour gérer la requête GET sur /api/homescreen
const getHomeScreen = (req, res) => {
  res.send({ message: 'Page HomeScreen' });
};

// Fonction pour récupérer la liste des joueurs dans la table player
const getList = async (req, res) => {
  try {
    // Exécuter la requête pour récupérer tous les joueurs
    const result = await pool.query(`SELECT * FROM player
                                     ORDER BY score DESC;`);
    const joueurs = result.rows;

    // Envoyer les données des joueurs en réponse
    res.send({ joueurs: joueurs });
  } catch (error) {
    console.error('Erreur lors de la récupération des joueurs', error);
    res.status(500).send({ error: 'Erreur lors de la récupération des joueurs' });
  }
};

// Exporter les fonctions
module.exports = {
  getHomeScreen,
  getList,
};
