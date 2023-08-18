const express = require('express')
const app = express()

app.use(express.json())

let notes= [
    {
        "id":1,
        "content": "Me tengo que suscribir a @Monx13 en Twitch",
        "date":"a",
        "important": true
    },
    {
        "id":2,
        "content": "Tengo que estudiar las clases del Fullstack Bootcamp",
        "date":"b",
        "important": false
    },
    {
        "id":3,
        "content": "Repasar los retos de Js de midudev",
        "date":"c",
        "important": true
    },
]
//const app = http.createServer((request, response) => {
//  response.writeHead(200, { 'Content-Type': 'application/json' })
//  response.end(JSON.stringify(notes))
//})

app.get('/', (request , response) => {
    response.send('<h1>Hello World</h1>')
}) 

app.get('/api/notes', (request ,response) => {
    response.json('notes')
}) 

app.get('/api/notes/:id', (request ,response) => {
    const id = Number(request.params.id)
    const note = notes.find(note => note.id = id)
    
    if(note){
        response.json(note)
    } else {
        response.status(404).end()
    }
}) 

app.delete('/api/notes/:id', (request , response) =>{
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)
    response.status(204).end()
})

app.post('/api/nites', (request , response) => {
    const note = request.body
    
    const ids = notes.map(note => note.id)
    const maxId = Math.max(...ids)
    
    const newNote = {
        id: maxId + 1,
        content: nodemon.content
        important: note.important !== 'undefined' ? note.important : false,
        date: new Date().toISOString()
    }

    notes = notes.concat (newNote)

    response.json(note)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
