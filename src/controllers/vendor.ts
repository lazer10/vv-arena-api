import { Request, Response } from 'express'

import VendorService from '../services/vendor'

class VendorController {
  static async fetchAllVendors(req: Request, res: Response) {
    try {
      const vendors = await VendorService.fetchAllVendors()
      return res.status(200).json({
        message: 'Vendors fetched successfully...',
        data: vendors
      })
    } catch (err) {
      return res.status(500).json({
        message: err.message || err
      })
    }
  }

  static async createVendor(req: Request, res: Response) {
    try {
      const { vendorname, phone, statusid } = req.body
      const sameName = await VendorService.fetchSingleVendor({ vendorname })
      if (sameName) return res.status(409).json({ message: 'Vendor with that name exists...' })
      await VendorService.createVendor(vendorname,
        phone,
        statusid
      )
      return res.status(200).json({
        message: 'Vendor created successfully'
      })
    } catch (err) {
      return res.status(500).json({
        message: err.message || err
      })
    }
  }

  static async updateVendor(req: Request, res: Response) {
    try {
      const vendor = await VendorService.fetchSingleVendor({ vendorid: Number(req.params.id) })
      if (!vendor) return res.status(404).json({ message: 'Vendor not found...' })
      const { phone, vendorname, statusid, sales } = req.body
      const updatedVendor = await VendorService.updateVendor(
        { vendorid: Number(req.params.id) },
        { phone, vendorname, statusid, sales }
      )
      return res.status(200).json({
        message: 'Vendor updated successfully',
        data: updatedVendor
      })
    } catch (err) {
      return res.status(500).json({
        message: err.message || err
      })
    }
  }
}

export default VendorController