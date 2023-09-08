console.log('Hello world')
import express from 'express'
import ejs from 'ejs'

import {dirname,join} from 'path'    //ruta absoluta concatenada sin importar SO
import { fileURLToPath } from 'url'
import indexRoutes from './routes/index.js'

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url)) //ruta absoluta para poder mover el pro
app.set('views',join(__dirname,'views'))  //donde estan las rutas concatenadas son impotar SO

app.set('view engine','ejs')              //se configura view ejs
app.use(indexRoutes)

app.listen(process.env.PORT || 3000)
console.log('Server listening on port', process.env.PORT || 3000)