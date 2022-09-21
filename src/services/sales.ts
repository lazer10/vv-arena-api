import prisma from '../prisma-instance'
import { fetchAllVendorsFilterType } from '../types'

class SalesService {
  static async fetchAllSales(filter: fetchAllVendorsFilterType) {
    try {
      return await prisma.vvarenasales.findMany({
        where: filter,
        select: {
          vendorid: true,
          salesdate: true,
          debitaccount: true,
          reply: true,
          tid: true,
          payref: true,
          amount: true
        }
      })
    } catch (err) {
      throw err
    }
  }
}

export default SalesService