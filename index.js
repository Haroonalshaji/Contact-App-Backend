// importing express 
const express = require('express');

// importing cors 
const cors = require('cors');

const logic = require('./services/logics')

// creating a backend application using express
const emsServer = express()

// connecting the frontend application using cors
emsServer.use(cors({
    origin: 'http://localhost:3000' //there will be a slash coming at the last that's not need
}))

// convert the json data to js and js to json using json()
emsServer.use(express.json())

// defining the port number
emsServer.listen(8000, () => {
    console.log('Server listening on the port 8000');
})

// API call for get all cotacts
emsServer.get('/get-all-contacts', (req, res) => {
    logic.getAllContacts().then((response) => {
        res.status(response.statusCode).json(response);
    })
})

// API call for adding a contact
emsServer.post('/add-contact', (req, res) => {
    logic.addContact(req.body.id, req.body.firstname, req.body.phone, req.body.email).then((response) => {
        res.status(response.statusCode).json(response);
    })
})

// API call for delete an employeee
emsServer.delete('/delete-contact/:id', (req, res) => {
    logic.deleteContact(req.params.id).then((response) => {
        res.status(response.statusCode).json(response);
    })
})

// API call for one single contact
emsServer.get('/get-one-contact/:id', (req, res) => {
    logic.getOneContact(req.params.id).then((response) => {
        res.status(response.statusCode).json(response);
    })
})

// for edit a contact
emsServer.post('/update-one-contact/:id', (req, res) => {
    logic.updateContact(req.params.id, req.body.firstname, req.body.phone, req.body.email).then((response) => {
        res.status(response.statusCode).json(response);
    })
})