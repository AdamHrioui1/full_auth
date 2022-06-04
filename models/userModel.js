const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name!"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, "Please enter your password!"],
        trim: true,
    },
    role: {
        type: Number,
        default: 0
    },
    avatar: {
        type: String,
        default: 'https://th.bing.com/th/id/R.3fd38d6ccfd0f7a1092c00879e737df6?rik=hu2HHcjcxoRgjA&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_339111.png&ehk=1VSUO37%2fcX%2ba5RuLn%2b1VQFuCF%2fkAGZMz496wX%2fNpoLs%3d&risl=&pid=ImgRaw&r=0'
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', UserSchema)
module.exports = User