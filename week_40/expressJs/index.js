const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("<h1>This is the home page</h1>")
})

app.post('/about', (req, res) => {
    res.send("<h1>What do you want to know about us</h1>")
})

app.put('/contact', (req, res) => {
    res.send("<h1>You can contact us here</h1>")
})

app.delete('/delete', (req, res) => {
    res.send("<h1>Delete anything you want</h1>")
})

app.listen(port, () => {
    console.log(`You server is listening on port ${port}`)
})