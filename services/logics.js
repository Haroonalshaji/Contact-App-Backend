// backend logics

// import db.js
const db = require('../services/db')

// get all the contact details from db
const getAllContacts = () => {
    return db.contact.find().then((result) => {
        if (result) {
            return {
                statusCode: 200,
                contacts: result
            }
        } else {
            return {
                statusCode: 404,
                message: 'cant find contact'
            }
        }
    })
}

// add a new contact   
const addContact = (id, firstname, phone, email) => {
    return db.contact.findOne({ id }).then((result) => {
        if (result) {
            return {
                statusCode: 404,
                message: "contact already exists"
            }
        } else {  //the id is not in the db

            const newContact = new db.contact({ id, firstname, phone, email })
            newContact.save();
            return {
                statusCode: 200,
                message: "contact added succesfully"
            }

        }
    })
}

const deleteContact = (id) => {
    return db.contact.deleteOne({ id }).then((result) => {
        return {
            statusCode: 200,
            message: 'Contact deleted succesfully'
        }
    }).catch((error) => {
        return {
            statusCode: 401,
            message: "couldn't find this contact"
        }
    })
}

// get a particular employee from db
const getOneContact = (id) => {
    return db.contact.findOne({ id }).then((result) => {
        if (result) {
            return {
                statusCode: 200,
                message: result
            }
        } else {
            return {
                statusCode: 404,
                message: 'cant find contact'
            }

        }
    })
}

// update a particular contact
const updateContact = (id, firstname, phone, email) => {
    return db.contact.findOne({ id }).then((result) => {
        if (result) {
            result.id = id;
            result.firstname = firstname;
            result.phone = phone;
            result.email = email;

            result.save()
            return {
                statusCode: 200,
                message: "employee data updated successfully"
            }
        } else {
            return {
                statusCode: 404,
                message: 'cant find contact'
            }

        }
    })
}

module.exports = {
    getAllContacts,
    addContact,
    deleteContact,
    getOneContact,
    updateContact
}