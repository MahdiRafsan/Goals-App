const express = require('express');
const dotenv = require('dotenv').config()
const colors = require('colors')
const port = process.env.PORT || 5000;
const app = express()

const goalRoutes = require('./routes/goalRoutes')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false })) // extended: false → cannot post nested object

app.use('/api/goals', goalRoutes)

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})