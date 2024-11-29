const express =require('express');
const app =express();
const port=3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


    

app.listen(port, () =>{
    console.log(`Application exemple à l'ecoute sur le port 3000 ${port}`)
});