const {Schema, model} = require("mongodb");

const userSchema = new Schema ({
    username: String,
    email: String,
    password: String
})

module.exports = model('User', userSchema)