const express = require("express");
const app = express();
const PUERTO = 8080;

//Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./src/public"));

//Rutas
app.get("/", (req, res) => {
    res.send("Conecta")
})


//Listen
app.listen(PUERTO, () => {
    console.log(`Conectado al servidor en http://localhost:${PUERTO}`);
})