import { Router } from 'express'

import Controller from '../controllers/vendor'

const router = Router()

router.get('/', Controller.fetchAllVendors)

router.post('/new', Controller.createVendor)

router.put('/:id/update', Controller.updateVendor)

export default router