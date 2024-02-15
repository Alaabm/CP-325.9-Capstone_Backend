const express = require('express');

const router = express.Router()

//Grab the controller functions
const {index, create, destroy} = require("../controllers/gems");

//http://localhost:3000/gems

//Get all gems
router.get('/', index);

//Create a gem
router.post('/', create);

//Delete a gem
router.delete('/:id', destroy);

module.exports = router;