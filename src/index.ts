import express from 'express'
import path from 'path'
require('dotenv').config()

const app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => res.status(200).json({ message: 'this works' }))
app.listen(process.env.PORT || 3050, () => {
    console.log('app listening')
})