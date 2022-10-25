import { Request, Response } from "express"
import express from 'express'
require('dotenv').config()

const app = express()
app.get('/', (req: Request, res: Response) => res.status(200).json({ message: 'this works' }))
app.listen(process.env.PORT || 3050, () => {
    console.log('app listening')
})