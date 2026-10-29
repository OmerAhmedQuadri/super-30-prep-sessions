import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

app.get('/user', (req, res) => {
    res.send('Hello this is Omer ahmed quadri')
})

app.get('/', (req, res) => {
    res.send({
        success: true,
        message: "Hello from server"
    })
})

app.get('/add/:a/:b', (req, res) => {
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)
    
    if(isNaN(a) || isNaN(b)) {
        res.send({
            success: false,
            message: 'invalid variables',
            data: null
        })
        
    }
    else {
        console.log('hello')
        res.send({
            success: true,
            message: 'operation successfull',
            data: a + b
        })
    }
        
})

app.listen(3000, () => {
    console.log('server is running')
})