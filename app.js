const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); 

const UserRoutes = require('./routes/userroutes');
const IdeaRoutes = require('./routes/idearoutes');

const logger = require('./middleware/logger');

dotenv.config(); 

const app = express();
const port = 5000;


connectDB();


app.use(logger);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes API
app.use('/api/users', UserRoutes);
app.use('/api/ideas', IdeaRoutes);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Erreur interne du serveur' });
});

app.listen(port, () => {
    console.log(`Application à l'écoute sur le port ${port}`);
});
