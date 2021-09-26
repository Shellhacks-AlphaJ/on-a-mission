const express = require('express')
const Joi = require('joi')
// import express from 'express'
// import joi from 'joi'

const validateMission = require('../validation/validation_schema')

const missionRouter = express.Router()

missionRouter.post('', async (req, res) => {
    try {
        const { name, difficulty, time } = req.body

        // await Joi.validate(
        //     {
        //         name,
        //         difficulty,
        //         time,
        //     },
        //     validateMission,
        //     { abortEarly: false }
        // )

        const schema = Joi.object({
            name: Joi.string().alphanum().min(3).max(30).required(),
            difficulty: Joi.number()
                .min(0)
                .max(4)
                .error(() => {
                    message: 'Please select a valid difficulty'
                })
                .required(),
            time: Joi.number()
                .min(0)
                .max(5)
                .error(() => {
                    message: 'Please select a valid time'
                })
                .required(),
        })

        try {
            const mission = {
                name,
                difficulty,
                time,
            }

            const result = schema.validate(mission)
            if (result && result.error) {
                res.status(400).send({
                    message: result.error.details[0].message,
                })
                return
            }

            const newMission = {
                name,
                difficulty,
                time,
                completed: false,
                tasks: difficulty < 3 ? null : [],
            }

            res.status(200).send(newMission)

            // { abortEarly: false }
            // )
        } catch (err) {
            console.log(err)
        }
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = missionRouter
