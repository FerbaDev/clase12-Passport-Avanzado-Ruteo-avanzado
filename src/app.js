const express = require("express");
const app = express();
const PUERTO = 8080;

//Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./src/public"));

