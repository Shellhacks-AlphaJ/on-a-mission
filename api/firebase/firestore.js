// import { initializeApp } from 'firebase/app'
const { initializeApp } = require('firebase/app')
const firebase = require('firebase-admin')
const config = require('../config/firebaseConfig')

const db = firebase.initializeApp()

module.exports = db
