import rs from 'readline-sync'
let tasks = []

const addTask = () => {
    const title = rs.question('Enter the title of the task: ')
    const deadline = rs.question('Enter the deadline of the task: ')
    const task = { id: Date.now(), title, deadline}
    tasks.push(task)
}

const printTasks = () => {
    console.log('Tasks:', tasks)
}

const deleteTask = () => {
    const id = rs.questionInt("Enter the task id: ")
    tasks = tasks.filter(t => t.id != id)
}

// printTasks()

// addTask({
//     title: 'prepare for offline class',
//     deadline: '01/11/2026'
// })

// printTasks()


const app = () => {


    while (true) {
        console.log('1. print')
        console.log('2. add')
        console.log('3. delete')
        const choice = rs.questionInt('Enter your choice: ')

        switch (choice) {
            case 1:
                printTasks()
                break;
            case 2:
                addTask()
                break;
            case 3:
                deleteTask()
                break;


        }

    }

}

app()