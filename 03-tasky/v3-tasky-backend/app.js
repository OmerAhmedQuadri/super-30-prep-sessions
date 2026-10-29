import express from 'express'
import fs from 'fs/promises'
import { readTasks } from './helperFunctions.js'

const db = './tasks.json'
const app = express() 
app.use(express.json())
const PORT = 3000


// app.get('/api/tasks', async (req, res) => {
//     const data = await fs.readFile(db)
//     const tasks = JSON.parse(data)
//     res.send({
//         success: true,
//         tasks: tasks
//     })
// })

app.get('/api/tasks', readTasks)

app.post('/api/tasks', async (req, res) => {
    const title = req.body.title
    const deadline = req.body.deadline


    const data = await fs.readFile(db)
    const tasks = JSON.parse(data)

    const newTask = { id: Date.now(), title, deadline}
    tasks.push(newTask)

    await fs.writeFile(db, JSON.stringify(tasks, null, 4))
    
    res.send({
        success: true,
        tasks: tasks
    })
})







app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})
