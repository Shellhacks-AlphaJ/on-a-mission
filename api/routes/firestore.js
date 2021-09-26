const firebase = require('../firebase/firestore')
// const firebase = require('firebase')
// const firebase = require('../db')
const express = require('express')
// const firebasedb = require('../firebase/firestore')

// const db = firebase.initializeApp()
// const firestore = firebasedb.firestore()
const firestore = firebase.firestore()
const firestoreRouter = express.Router()

firestoreRouter
    .post('', async (req, res, next) => {
        try {
            const data = req.body
            await firestore.collection('data').doc().set(data)
            res.status(200).send('Record saved successfully')
        } catch (error) {
            res.status(400).send(error.message)
        }
    })
    .get('', async (req, res, next) => {
        try {
            const doc = await firestore.collection('data').doc()
            const data = await doc.get()
            if (!data.exists) {
                res.status(404).send('No data record found')
            } else {
                res.status(200).send(data.data())
            }
        } catch (error) {
            res.status(400).send(error.message)
        }
    })
    .delete('', async (req, res, next) => {
        try {
            const data = await firestore.collection('data').doc().delete()
            res.status(204).send(data)
        } catch (error) {
            res.status(400).send(error.message)
        }
    })

module.exports = firestoreRouter
