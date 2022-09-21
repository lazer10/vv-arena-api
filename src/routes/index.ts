import { Router, Request, Response } from 'express'

import vendor from './vendor'
import sales from './sales'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'VVArena API'
  })
})

router.use('/vendors', vendor)
router.use('/sales', sales)

export default router