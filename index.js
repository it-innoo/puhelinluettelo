const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(bodyParser.json())
app.use(cors())
// app.use(morgan('tiny'))
morgan.token('body', function (req, res) { return JSON.stringify(req.body) })
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

let persons = [
    {
      "name": "Arto Hellas",
      "number": "040-123456",
      "id": 1
    },
    {
      "name": "Martti Tienari",
      "number": "040-123456",
      "id": 2
    },
    {
      "name": "Arto Järvinen",
      "number": "040-123456",
      "id": 3
    },
    {
      "name": "Lea Kutvonen",
      "number": "040-123456",
      "id": 4
    }
  ]

const generatedId = () => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(p => p.id))
    : 0

  return maxId + 1
}


app.get('/', (req, res) => {
  // res.send('<h1>Hello World!</h1>')
  res.redirect('/info')
})

app.get('/info', (req, res) => {

  res.send(
    `<p>
    Puhelinluettelossa
    ${persons.length} henkilön tiedot
    </p>
    <p>
      ${new Date()}
    </p>`
    )
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons
    .find(person => person.id === id)

  if (person) {
    res.json(person)
  } else {
    res.status(404).end()
  }
  
})

app.post('/api/persons', (req, res) => {
  const person = req.body
  person.id = generatedId()

  if (!person.name || !person.number) {
    return res.status(400).json({
      error: 'name or number missing'
    })
  }

  if (persons.filter(p => p.name === person.name).length > 0) {
    return res.status(400).json({
      error: 'name must be unique'
    })
  }

  // persons = persons.concat(person)
  persons = [...persons, person]
  res.json(person)
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons
    .filter(person => person.id !== id)

    res.status(204).end()
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
