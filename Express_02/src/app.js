
const express = require('express')
const app = express()
app.use(express.json())

let notes = []

app.post('/notes', (req, res) => {
    notes = [...notes, req.body]
    res.status(201).json({
        message: "Note Created Successfully..."
    })
})

app.get('/notes', (req, res) => {
    res.status(200).json({
        message: "Notes Fetched Successfully",
        notes: notes
    })
})

app.delete('/notes/:idx', (req, res) => {
    const idx = req.params.idx
    delete notes[idx]

    res.status(200).json({
        message: "Note Deleted Successfully..."
    })
})

app.patch('/notes/:idx', (req, res) => {
    const idx = req.params.idx
    const description = req.body.description

    notes[idx].description = description

    res.status(200).json({
        message: "Note Updated Successfully"
    })
})

module.exports = app