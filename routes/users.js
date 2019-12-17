var express = require('express');
var router = express.Router();
const User = require('../models/User')
const TemporaryUser = require('../models/TemporaryUser')

router.post('/register', async (req, res) => {
    // Create a new user
    try {
        const user = new User(req.body)
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
});

router.post('/temporary', async (req, res) => {
    try {
        const temporaryUser = new TemporaryUser(req.body)
        await temporaryUser.save()
        res.status(200).send({})
    } catch (error) {
        console.log(error.message)
        res.status(400).send({error: error.message})
    }
})

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/login',(req,res) => {
  res.render('login')
});

router.post('/login', async(req, res) => {
    //Login a registered user
    try {
        const { email, password } = req.body
        const user = await User.findByCredentials(email, password)
        if (!user) {
            return res.status(401).send({error: 'Login failed! Check authentication credentials'})
        }
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }
});

module.exports = router
