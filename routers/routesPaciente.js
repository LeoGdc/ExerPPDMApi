const express = require("express");
const router = express.Router();

const pacienteController = require("../controller/pacienteController");

router.get('/listarPaciente', async (req,res) =>{
    pacienteController.listarPaciente(req, res)
});

router.post('/cadastrarPaciente', async (req,res) => { 
    pacienteController.cadastrarPaciente(req,res)
});

module.exports = router;