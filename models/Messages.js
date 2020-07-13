const mongoose = require('mongoose')
const Schema = mongoose.Schema

const validateEmail = email => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
}

const emailPropertySchema = {
    type: String,
    lowercase: true,
    validate: [validateEmail, 'Please fill in a valid email address']
}

const stringPropertySchema = {
    type: String,
    minlength: [3, 'Text should be at least 3 characters long'],
    maxlength: [255, 'Text should be at most 255 characters long']
}

const Messages = new Schema({
    sender: emailPropertySchema,
    receiver: emailPropertySchema,
    message: stringPropertySchema,
    subject: stringPropertySchema,
    creation_date: { type: Date, default: Date.now }
}, { collection: "messages" })

module.exports = mongoose.model("messages", Messages)
