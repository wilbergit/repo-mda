console.log('Hello world')
import express from 'express'
import ejs from 'ejs'
import {dirname,join} from 'path'
import { fileURLToPath } from 'url'
import indexRoutes from './routes/index.js'

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))
//console.log(__dirname)
app.set('views',join(__dirname,'views'))
app.set('view engine','ejs')
app.use(indexRoutes)

app.listen(3000)
console.log('Server listening on port', 3000)