const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let RoomSchema = new Schema({
    size: {type: Number, default: 1},
    roomId: {type: String},
    peoples: [{
      name: {type: String}
    }]
});

RoomSchema.pre('save', async function (next) {
  // Hash the password before saving the user model
  const currentRoom = this
  if (currentRoom.peoples && currentRoom.peoples.length > currentRoom.size) {
    throw new Error('Cette chambre est pleine, il va falloir choisir une autre chambre')
  }
  next()
})


let Room = mongoose.model('room', RoomSchema);

module.exports = Room;
