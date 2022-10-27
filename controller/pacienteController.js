const express = require('express');
const pacienteModel = require('../model/pacienteModel');

const listarPaciente = async (req,res) => {

    pacienteModel.findAll()
        .then(
            (paciente) =>{
                res.status(200).send(paciente);
            }
        )
        .catch(
            (error) =>{
                res.status(500).json({"message": error})
            }
        )
}
const cadastrarPaciente = async (req,res) => {
    let { nome_paciente, telefone_paciente, celular_paciente, email_paciente, nome_responsavel, telefone_responsavel } = req.body;

    if (nome_paciente != null && telefone_paciente != null && celular_paciente != null && email_paciente != null) {
        if(Number(telefone_paciente) && Number(celular_paciente)){
            pacienteModel.create({
                nome_paciente,
                telefone_paciente,
                celular_paciente,
                email_paciente,
                nome_responsavel,
                telefone_responsavel
                })
                .then(
                    () => {
                    res.status(200).json({message:"inserido com sucesso."});
                    }
                )
                .catch(
                    (error) => {
                    res.status(500).json({ message: error });
                    }
                );
        } else {
        res.status(500).json({ msg: "Existem campos obrigatórios que devem ser preenchidos" })
        }
    }
}

module.exports = {
    listarPaciente,
    cadastrarPaciente
}