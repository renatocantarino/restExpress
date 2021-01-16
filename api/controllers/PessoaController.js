const { request, response } = require("express");
const { v4: uuidv4 } = require('uuid');

module.exports = app => {
    const peopleDB = app.data.PessoaMock;
    const controller = {};


    const {
        Pessoas: pessoaMock,
    } = peopleDB;

    controller.save = (request, response) => {
        pessoaMock.data.push({
            id: uuidv4(),            
            name: request.body.name,
            birthDate: request.body.birthDate,
            cellphone: request.body.cellphone,
            phone: request.body.phone,
            email: request.body.email,
            occupation: request.body.occupation,
            state: request.body.state,

        })

        response.status(201).json(pessoaMock);
    };


    controller.getAll = (request, response) => response.status(200).json(peopleDB);



    return controller;
}