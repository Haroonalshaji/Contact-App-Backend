// connection code of node and mongodb
const mongoose = require('mongoose');

// connection string
mongoose.connect('mongodb://localhost:27017/Contact-search');

// model creation
const contact = mongoose.model('contact', {
    id: String,
    email: String,
    username: String,
    password: String,
    firstname: String,
    lastname: String,
    phone: String,
    city: String,
    street: String,
    number: String,
    zipcode: String

})

module.exports={
    contact
}