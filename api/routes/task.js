const { response } = require('express')
const express = require('express')
const taskController = require('../controller/task')

function routes(jsonObject) {
    const taskRouter = express.Router()
    const controller = taskController(jsonObject)
    taskRouter.route('/tasks').post(controller.post).get(controller.get)
}
