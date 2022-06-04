require('dotenv').config()
const express = require('express')
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const connection = require('./database/connection');

const app = express()
const port = process.env.PORT || 8080

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extends: false }))
app.use(cookieParser())

// routes
app.use('/user', require('./routes/userRouter'))

connection()

app.get('/', (req, res) => {
    return res.json({ msg: 'Hello bro!' })
})

app.listen(port, () => console.log(`Server is listening on port: http://localhost:${port}`))