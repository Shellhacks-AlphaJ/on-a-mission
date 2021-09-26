// import Joi from 'joi'
const Joi = require('joi')

const name = Joi.string().alphanum().min(3).max(30).required()
const difficulty = Joi.number()
    .min(0)
    .max(4)
    .error(() => {
        message: 'Please select a valid difficulty'
    })
    .required()

const time = Joi.number()
    .min(0)
    .max(5)
    .error(() => {
        message: 'Please select a valid time'
    })
    .required()

const completed = Joi.boolean()
const tasks = Joi.array()

const validateMission = Joi.object().keys({
    name,
    difficulty,
    time,
})

const validateTask = Joi.object().keys({
    name,
    difficulty,
    time,
})

/* validateTask = Joi.object({
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
    .required()
}) */
module.exports = { validateMission, validateTask }
// export default validateMission
// export const validateMission = Joi.object().keys({
//     name,
//     difficulty,
//     time,
// })

// export const validateTask = Joi.object().keys({
//     name,
//     difficulty,
//     time,
// })
