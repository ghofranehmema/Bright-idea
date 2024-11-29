const express = require('express');
const app = express();
const port =3000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.json()); 
app.use(cors());

















app.listen(port,() => {
    console.log(`application exemple a l'ecoute sur le port  ${port}`)
});

