const express = require("express");
const cors = require("cors")

const app = express();

app.use(express.json());
app.use(cors());

const listarPaciente = require("./routers/routesPaciente");
const cadastrarPaciente = require("./routers/routesPaciente");

app.use("/", listarPaciente);
app.use("/", cadastrarPaciente);

app.listen(3000, ()=>{
    console.log("aplicação rodando em - http://localhost:3000");
})