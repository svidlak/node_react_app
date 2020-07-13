const express = require('express')
const app = express()
const port = 3005
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const DB = require('./config/db')
const globalErrHandler = require('./controllers/errorController');

// routes
const messagesRoutes = require('./routes/messagesRoute')

app.use(cors())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'client/build')))
app.use('/api/messages', messagesRoutes)

// 404 handler
// app.use( (req, res) => res.status(404).json({error: 'Route not found'}) )
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
})
app.use(globalErrHandler)

DB.once("open", () => console.log("MongoDB database connection established successfully") )
app.listen(port, () => console.log(`App listening at http://localhost:${port}`) )
