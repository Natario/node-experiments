const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.listen(3001, () => {
    console.log('server running');
})

app.get('/getFood', (req, res) => {
    // console.log('reqqq');
    res.send('Cookies!')
})

app.post('/receiveInput', (req, res) => {
    console.log('data received from client is: ',req.body.userInput);
})