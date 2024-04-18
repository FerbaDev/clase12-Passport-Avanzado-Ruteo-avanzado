const express = require("express");
const app = express();
const PUERTO = 8080;
const jwt = require("jsonwebtoken");

//Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./src/public"));

//Rutas
app.post("/login", (req, res) => {
  let { user, pass } = req.body;
  if (user === "fer" && pass === "barron") {
    //generamos el token
    let token = jwt.sign({ user, pass }, "coderhouse", { expiresIn: "24h" });
    res.send({ message: "Login exitoso", token: token });
  } else {
    res.send("Login fallido");
  }
});

//Listen
app.listen(PUERTO, () => {
  console.log(`Conectado al servidor en http://localhost:${PUERTO}`);
});
