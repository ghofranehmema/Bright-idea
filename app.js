const express = require('express');
<<<<<<< HEAD
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
=======
const app = express();
const port =3000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.json()); 
app.use(cors());


app.use("/api/auth", require("./routes/authRoutes")); // Routes pour l'authentification
app.use("/api/ideas", require("./routes/ideaRoutes")); // Routes pour les idées
app.use("/api/users", require("./routes/userRoutes")); // Routes pour les utilisateurs
















app.listen(port,() => {
    console.log(`application exemple a l'ecoute sur le port  ${port}`)
});

>>>>>>> fbe802f2f369c0927e3ebb43226dc0d4415daa1d
