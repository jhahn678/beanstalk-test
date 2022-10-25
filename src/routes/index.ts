import { Router } from 'express'
import { returnName } from '../utils/logName'

const router = Router()

router.get('/', (req, res) => {
    res.status(200).json({ test: returnName('Jeffrey') })
})

export default router
