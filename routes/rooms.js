var express = require('express');
var router = express.Router();
const Room = require('../models/Room')

/* GET home page. */
router.get('/', async (req, res, next) => {
  const newRoom = new Room({size: 4, roomId: '54'})

  await newRoom.save()

  res.status(200).send({})
});

module.exports = router;
