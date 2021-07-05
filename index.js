const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

let db = [
    { '1': {nome: 'cliente 1', idade : '20'}},
]

// Buscar Dados
app.get('/', (req, res) => {
    return res.json(db)
})

// Inserir Dados
app.post('/add', (req,res) => {
    const body = req.body

    if(!body)
        return res.status(400).end()

    db.push(body)
    return res.json(body)

})


app.listen(21262, () => {

    console.log('Express Started at http://192.168.3.10:21262')
    })