import { Router } from 'express'

import Controller from '../controllers/sales'

const router = Router()

router.post('/', Controller.fetchAllSales)

export default router