const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Pour parser les données JSON envoyées par le client
app.use(express.urlencoded({ extended: true })); // Pour parser les données URL-encodées

app.post('/submit-form', (req, res) => {
    console.log(req.body); // Affiche les données du formulaire reçues

    // Envoie une réponse JSON avec un message de confirmation
    res.json({ message: 'Formulaire reçu avec succès !' });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});