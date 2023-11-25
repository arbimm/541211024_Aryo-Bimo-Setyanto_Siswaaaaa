const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nama : {
        type :String,
        required:[true,'Silahkan isikan nama'],
        unique:true
    },
    email : {
        type:String,
        required:[true,'Silahkan isikan email'],
        unique:true,
    }
})

module.exports = mongoose.model('User',UserSchema)