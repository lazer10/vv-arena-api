import { Request, Response } from 'express'

import { toJson } from '../helpers'
import SalesService from '../services/sales'

class SalesController {
  static async fetchAllSales(req: Request, res: Response) {
    try {
      const { vendor, startDate, endDate } = req.body
      let sales = await SalesService.fetchAllSales({
        salesdate: {
          lte: endDate,
          gte: startDate
        }
      })
      if (vendor !== '') {
        sales = await sales.filter((s) => s.vendorid === Number(vendor))
      }
      const jsonSales = await toJson(sales)
      return res.status(200).json({
        message: 'All sales fetched successfully',
        data: jsonSales
      })
    } catch (err) {
      return res.status(500).json({
        message: err.message || err
      })
    }
  }
}

export default SalesController