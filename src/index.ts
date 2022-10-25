import express from 'express'
import path from 'path'
import routes from './routes'
require('dotenv').config()

const app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', routes)
app.get('/', (req, res) => res.status(200).json({ message: 'this works' }))
app.listen(process.env.PORT || 3050, () => {
    console.log('app listening')
})