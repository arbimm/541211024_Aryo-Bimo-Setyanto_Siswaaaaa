const express = require('express')
const sppRouter = require('./router/spps')
const app = express()
const port = 3000
const connectDB = require('./config/db')

const cors = require('cors');

app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(sppRouter)

connectDB()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})