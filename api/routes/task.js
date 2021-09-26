const express = require('express')
const Joi = require('joi')
const validateTask = require('../validation/validation_schema')
// import express from 'express'

const taskRouter = express.Router()

taskRouter.post('', async (req, res) => {
    try {
        const { name, difficulty, time } = req.body

        // await Joi.validate(
        //     {
        //         name,
        //         difficulty,
        //         time,
        //     },
        //     validateTask,
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
            const task = {
                name,
                difficulty,
                time,
            }

            const result = schema.validate(task)

            if (result && result.error) {
                res.status(400).send({
                    message: result.error.details[0].message,
                })
                return
            }
            // console.log(result)
            // { abortEarly: false }
            // )
            const newTask = {
                name: name,
                difficulty: difficulty,
                time: time,
                completed: false,
                tasks: difficulty < 3 ? null : [],
            }
            res.status(200).send(newTask)
        } catch (err) {
            console.log(err)
            res.status(400).send(err)
        }
    } catch (err) {
        console.log('Error has occurred')
        const { name, difficulty, time } = req.body
        console.log(name, difficulty, time)
        res.status(400).send(err)
    }
})

module.exports = taskRouter
