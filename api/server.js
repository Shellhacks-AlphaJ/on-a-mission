// import { taskRouter, missionRouter } from './routes/index'
const express = require('express')
const morgan = require('morgan')

// import taskRouter from './routes/task'
// import missionRouter from './routes/mission'
const app = express()

const taskRouter = require('./routes/task')
const missionRouter = require('./routes/mission')
const firestoreRouter = require('./routes/firestore')

app.use(express.json())

app.listen(5000, () => {
    console.log('listening on https://localhost:5000')
})

// app.use("/api", );
app.use('/api/tasks', taskRouter)
app.use('/api/missions', missionRouter)
app.use('/api', firestoreRouter)
