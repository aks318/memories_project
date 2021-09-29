import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js'
import {mongoURI} from './config/keys.js'

const app = express()


app.use(bodyParser.json({ limit : "30mb" , extented : true}))
app.use(bodyParser.urlencoded({ limit : "30mb" , extented : true}))
app.use(cors())

app.use('/posts' , postRoutes)


const CONNECTION_URL = mongoURI
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL , {useNewUrlParser : true , useUnifiedTopology : true})
    .then(() => app.listen(PORT , () =>console.log(`Server Running On Port: ${PORT}`)))
    .catch((err) => console.log(err.message))