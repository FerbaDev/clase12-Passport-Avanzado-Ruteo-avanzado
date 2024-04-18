const express = require("express");
const app = express();
const PUERTO = 8080;
const jwt = require("jsonwebtoken");
const initializePassport = require("./config/passport.config.js");
const passport = require("passport");
const cookieParser = require("cookie-parser");

//Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./src/public"));
//middleware de passport y cookie parser
app.use(cookieParser());
app.use(passport.initialize());
initializePassport();

//Rutas
app.post("/login", (req, res) => {
  let { user, pass } = req.body;
  if (user === "fer" && pass === "barron") {
    //generamos el token
    let token = jwt.sign({ user, pass }, "coderhouse", { expiresIn: "24h" }); //"coderhouse" es la palabra cecreta
    //res.send({ message: "Login exitoso", token: token }); se comenta para usar cookie

    //enviar token desde cookie
    res
      .cookie("coderCookieToken", token, {
        maxAge: 60 * 60 * 1000,
        httpOnly: true,
      })
      .send({ message: "Login exitoso" });
    //60*60*1000  representa una hora en milisegundos.
    //La opción httpOnly es una medida de seguridad que indica que la cookie solo se puede acceder a traves del protocolo HTTP y no mediante JS en el navegador.
  } else {
    res.send("Login fallido");
  }
});

//Armamos la ruta current a la cual tenemos que acceder si nos identificamos.

//Listen
app.listen(PUERTO, () => {
  console.log(`Conectado al servidor en http://localhost:${PUERTO}`);
});
