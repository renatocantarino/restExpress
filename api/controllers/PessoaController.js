const { request, response } = require("express");
const { v4: uuidv4 } = require('uuid');

module.exports = app => {
    const peopleDB = app.data.PessoaMock;
    const controller = {};


    const { Pessoas: pessoaMock } = peopleDB;

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

    controller.delete = (request, response) => {
        const { id } = request.params;

        const find = pessoaMock.data.findIndex(customer => customer.id === id);
        if (find === -1) {
            response.status(404).json({
                message: 'not found',
                sucess: false,
                object: pessoaMock
            })
        }
        else {
            pessoaMock.data.splice(find, 1);
            response.status(200).json({
                message: 'done',
                sucess: false,
                object: pessoaMock
            })
        }

    }

    controller.update = (request, response) => {
        const {
            customerId,
        } = request.params;

        const foundCustomerIndex = pessoaMock.data.findIndex(customer => customer.id === customerId);

        if (foundCustomerIndex === -1) {
            response.status(404).json({
                message: 'Cliente não encontrado na base.',
                success: false,
                object: pessoaMock
            });
        } else {
            const newCustomer = {
                id: customerId,
                parentId: req.body.parentId,
                name: req.body.name,
                birthDate: req.body.birthDate,
                cellphone: req.body.cellphone,
                phone: req.body.phone,
                email: req.body.email,
                occupation: req.body.occupation,
                state: req.body.state,
                createdAt: new Date()
            };

            pessoaMock.data.splice(foundCustomerIndex, 1, newCustomer);

            response.status(200).json({
                message: 'Cliente encontrado e atualizado com sucesso!',
                success: true,
                object: pessoaMock
            });
        }
    }



    return controller;
}