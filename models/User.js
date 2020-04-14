const mongoose = require('mongoose');
const bcrypt   = require('bcrypt');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

let userschema = new Schema({
    email : String,
    password : String,
    tokens: [{
        type: String
    }],
    needBus: {type: Boolean, default: false},
    peoples: [{
        name: {type: String},
        attending: {type: String}
    }]
}, {
    toObject: {
      transform: function (doc, ret) {
        delete ret._id;
        delete ret.tokens;
      }
    },
    toJSON: {
      transform: function (doc, ret) {
        delete ret._id;
        delete ret.tokens;
      }
    }
  });

userschema.pre('save', async function (next) {
    // Hash the password before saving the user model
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

userschema.methods.generateAuthToken = async function() {
    // Generate an auth token for the user
    const user = this
    const token = jwt.sign({_id: user._id}, process.env.JWT_KEY || 'dev')
    user.tokens = user.tokens.concat(token)
    await user.save()
    return token
}

userschema.statics.findByCredentials = async (email, password) => {
    // Search for a user by email and password.
    const user = await User.findOne({ email} )
    if (!user) {
        throw new Error({ error: 'Invalid login credentials' })
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (!isPasswordMatch) {
        throw new Error({ error: 'Invalid login credentials' })
    }
    return user
}

userschema.statics.findByJsonWebToken = async (jsonWebToken) => {
    const user = await User.findOne({tokens: jsonWebToken})

    return user
}

let User = mongoose.model('users', userschema);

module.exports = User;
