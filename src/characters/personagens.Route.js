const express = require('express');

const controller = require('./personagens.controller');

const route = require('express').Router();

route.get('', 
controller.findAllPersonController);

route.get('/find/:id', controller.findByIdPersonController);

route.post('/create', controller.createPerson);

route.put('/update/:id',
controller.updatePerson);

route.delete('/delete/:id',
controller.deletePerson);

module.exports = route;
