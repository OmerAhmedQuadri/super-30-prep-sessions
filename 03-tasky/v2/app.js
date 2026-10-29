import rs from 'readline-sync'
import fs from 'fs/promises'
const db = './tasks.json'

const saveTasks = async (tasks) => {
    await fs.writeFile(db, JSON.stringify(tasks, null, 4))
}

const readTasks = async () => {
    const data = await fs.readFile(db)
    return JSON.parse(data)
}

const printTasks = async () => {
    const tasks = await readTasks()
    console.log(tasks)
}

const addTask = async () => {
    const tasks = await readTasks()
    const title = rs.question('Enter the title of the task: ')
    const deadline = rs.question('Enter the deadline of the task: ')

    const newTask = { id: Date.now(), title, deadline}
    tasks.push(newTask)

    await saveTasks(tasks)
}

const deleteTask = async () => {
    let tasks = await readTasks()

    const id = rs.questionInt("Enter the task id: ")
    tasks = tasks.filter(t => t.id != id)

    await saveTasks(tasks)
}


const app = async () => {


    while (true) {
        console.log('1. print')
        console.log('2. add')
        console.log('3. delete')
        console.log('0. exit')
        const choice = rs.questionInt('Enter your choice: ')

        switch (choice) {
            case 1:
                await printTasks()
                break;
            case 2:
                await addTask()
                break;
            case 3:
                await deleteTask()
                break;
            case 0:
                console.log('Exiting...')
                return;
            default:
                console.log('Invalid input!')
                break;
        }

    }

}

app()



// 3 ways of writing async js
// callback 
// promises/traditional ones using .then/.catch
// async/await (this again returns promises only)