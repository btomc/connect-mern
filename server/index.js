import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const app = express()

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

const PORT = process.env.PORT || 8080

app.listen(PORT, console.log(`Server running on port ${PORT}`))
