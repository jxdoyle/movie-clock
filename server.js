// setup web server
const http = require('http')
const fs = require('fs')
const express = require('express')
const socketIo = require('socket.io')
const path = require('path')
const cors = require('cors')
const port = 3000

const nightmare = require('./nightmare')

const app = express() // Create express app

app.use(cors())
app.get('/', (req, res, next) => { // When someone visits homepage
  try {
    let filePath = path.resolve(__dirname, 'index.html') // Index.html file location
    return res.sendFile(filePath)
  }
  catch(e) {
    return next(e)
  }
})

app.get('/script.js', (req, res, next) => { // When someone visits tries to get script.js
  try {
    let filePath = path.resolve(__dirname, 'script.js') // script.js file location
    return res.sendFile(filePath)
  }
  catch(e) {
    return next(e)
  }
})

app.get('/styles.css', (req, res, next) => { // When someone visits tries to get styles.css
  try {
    let filePath = path.resolve(__dirname, 'styles.css') // styles.css file location
    return res.sendFile(filePath)
  }
  catch(e) {
    return next(e)
  }
})

const server = http.createServer(app) // Create server using express app

// Create socket.io
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    transports: ['websocket', 'polling'],
    credentials: true
  },
  allowEIO3: true
})

// Start and listen to port
server.listen(port, () => {
  console.log(`Server listening at ${port}`)
})

// Socket io events
io.on('connection', (socket) => {

  // On searchVideo
  socket.on('searchVideo', async (d) => {
    let videoLink = await nightmare.searchVideo(d.phrase) // search video for specific phase
    socket.emit('searchVideo', { videoLink }) // return phase to frontend
  })
})
