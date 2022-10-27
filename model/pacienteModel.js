const Sequelize = require('sequelize');

const connection = require('../database/database');

//definindo json

const pacienteModel = connection.define(
    'tbl_paciente',
    {
        id:{
            type: Sequelize.INTEGER(10),
            primaryKey:true,
            autoIncrement:true
        },
        nome_paciente:{
            type:Sequelize.STRING(150),
            allowNull:false
        },
        telefone_paciente:{
            type:Sequelize.STRING(10),
            allowNull:false
        },
        celular_paciente:{
            type:Sequelize.STRING(15),
            allowNull:false
        },
        email_paciente:{
            type:Sequelize.STRING(125),
            allowNull:false
        },
        nome_responsavel:{
            type:Sequelize.STRING(500),
            allowNull:true
        },
        telefone_responsavel:{
            type:Sequelize.STRING(15),
            allowNull:true
        }
    },{
        freezeTableName: true,
        timestamps: false
    }
);

// pacienteModel.sync({force:true});

module.exports = pacienteModel