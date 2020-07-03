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

router.post('/me', async(req, res) => {
    try {
        const { jsonWebToken, user } = req.body
        let userToUpdate = await User.findByJsonWebToken(jsonWebToken)

        if (!user) {
            res.status(400).send('User not found')
        }

        userToUpdate.needBus = user.needBus
        userToUpdate.peoples = user.peoples
        userToUpdate.hasUpdatedInfos = user.hasUpdatedInfos
        userToUpdate.mealPref = user.mealPref

        await userToUpdate.save()
        res.status(200).send({user: userToUpdate})
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

router.post('/all', async(req, res) => {
    try {
        const { superSecret } = req.body
        if (superSecret !== process.env.SUPER_SECRET) {
            res.status(400).send()
            return
        }

        const users = await User.find({})
        res.send(users)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

router.get('/me', async(req, res) => {
    try {
        const { jsonWebToken } = req.query
        const user = await User.findByJsonWebToken(jsonWebToken)
        if (!user) {
            res.redirect('/logout')
            return
        }

        res.send({ user })
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

module.exports = router
