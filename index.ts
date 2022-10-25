require('dotenv').config()
const express = require('express')

const app = express()
app.get('/', (req, res) => res.status(200).json({ message: 'this works' }))
app.listen(process.env.PORT || 3050, () => {
    console.log('app listening')
})