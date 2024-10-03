const express = require('express');
const app = express();
const PORT = 3001;

let history = []; // Tableau pour stocker l'historique des films cliqués

app.use(express.json()); // Middleware pour parser le JSON des requêtes

// Endpoint pour ajouter un film à l'historique
app.post('/historial/nuevo/:id', (req, res) => {
  const movieId = req.params.id;
  // Ajouter l'ID du film à l'historique sans vérification
  history.push(movieId);
  res.status(200).json({ message: "Film ajouté à l'historique", history });
});

// Endpoint pour récupérer l'historique complet
app.get('/historial', (req, res) => {
  res.json(history);
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
