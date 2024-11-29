const express = require('express');
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

