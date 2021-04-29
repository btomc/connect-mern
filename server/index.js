import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'

import connectDB from './config/db.js'
import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'
import uploadRoutes from './routes/uploadRoutes.js'

dotenv.config()

connectDB()

const app = express()


app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.use('/posts', postRoutes)
app.use('/upload', uploadRoutes)
app.use('/user', userRoutes)

const __dirname = path.resolve()
app.use('/posts/uploads', express.static(path.join(__dirname, '/uploads')))

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port ${PORT}`))
