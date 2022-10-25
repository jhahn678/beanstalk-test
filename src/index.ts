import express from 'express'
import path from 'path'
import { logName } from './utils/logName'
require('dotenv').config()

const app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.use('/test', (req, res) => {
    logName('Terrence')
    res.status(200).json({ test: 'testing this endpoint'})
})
app.get('/', (req, res) => res.status(200).json({ message: 'this works' }))
app.listen(process.env.PORT || 3050, () => {
    console.log(__dirname)
    console.log('app listening')
})