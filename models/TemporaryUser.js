const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let temporaryUserschema = new Schema({
    email : String,
    name: String
});

temporaryUserschema.pre('save', async function (next) {
  // Hash the password before saving the user model
  const currentUser = this
  const user = await TemporaryUser.findOne({ email: currentUser.email })
  if (user) {
      throw new Error('Cet email est déjà utilisé, pas de panique tu es déjà inscrit')
  }
  next()
})


let TemporaryUser = mongoose.model('temporaryUsers', temporaryUserschema);

module.exports = TemporaryUser;
