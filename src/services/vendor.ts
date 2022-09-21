import prisma from '../prisma-instance'
import { findVendorType, updateVendorBodyType } from '../types'

class VendorService {
  static async fetchAllVendors() {
    try {
      return await prisma.vvarenavendors.findMany()
    } catch (err) {
      throw err
    }
  }

  static async createVendor(vendorname: string,
    phone: string,
    statusid: number
  ) {
    try {
      return await prisma.vvarenavendors.create({
        data: {
          vendorname, phone, sales: 0, statusid
        }
      })
    } catch (err) {
      throw err
    }
  }

  static async fetchSingleVendor(filter: findVendorType) {
    try {
      return await prisma.vvarenavendors.findFirst({
        where: filter
      })
    } catch (err) {
      throw err
    }
  }

  static async updateVendor(filter: findVendorType, update: updateVendorBodyType) {
    try {
      return await prisma.vvarenavendors.update({ 
        where: filter,
        data: update 
      })
    } catch (err) {
      throw err
    }
  }
}

export default VendorService
