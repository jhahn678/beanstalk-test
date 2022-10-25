import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.status(200).json({ test: 'testing this endpoint'})
})

export default router
