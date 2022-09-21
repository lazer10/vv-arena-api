import express, { Request, Response } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { PrismaClient } from '@prisma/client'
    
const prisma = new PrismaClient()

const app = express()

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Parse JSON
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello World'
  })
})

app.get('/vendors', async (req: Request, res: Response) => {
  try {
    const vendors = await prisma.vvarenavendors.findMany()
    return res.status(200).json({
      message: 'Vendors fetched successfully...',
      data: vendors
    })
  } catch (err) {
    return res.status(500).json({
      message: err.message || err
    })
  }
})

const toJson = (data: any) => {
  return JSON.parse(JSON.stringify(data, (_, v) => (typeof v === 'bigint' ? `${v}n` : v)).replace(/"(-?\d+)n"/g, (_, a) => a))
}

app.post('/sales', async (req: Request, res: Response) => {
  try {
    const { vendor, startDate, endDate } = req.body
    let sales = await prisma.vvarenasales.findMany({
      where: { salesdate: {
        lte: endDate,
        gte: startDate
      }
      },
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
})

app.get('/sales/vendor/:id', async (req: Request, res: Response) => {
  try {
    const vendor = await prisma.vvarenavendors.findFirst({
      where: { vendorid: Number(req.params.id) }
    })
    if (!vendor) return res.status(404).json({ message: 'Vendor not found...' })
    const vendorSales = await prisma.vvarenasales.findMany({
      where: { vendorid: vendor.vendorid }
    })
    return res.status(200).json({
      message: 'Sales by ',
      data: await toJson(vendorSales)
    })
  } catch (err) {
    return res.status(500).json({
      message: err.message || err
    })
  }
})

app.put('/vendors/:id/update', async (req: Request, res: Response) => {
  try {
    const vendor = await prisma.vvarenavendors.findFirst({
      where: { vendorid: Number(req.params.id) }
    })
    const { phone, vendorname, statusid, sales } = req.body
    if (!vendor) return res.status(404).json({ message: 'Vendor not found...' })
    const updatedVendor = await prisma.vvarenavendors.update({ 
      where: { vendorid: Number(req.params.id) },
      data: { phone, vendorname, statusid, sales } })
    return res.status(200).json({
      message: 'Vendor updated successfully',
      data: updatedVendor
    })
  } catch (err) {
    return res.status(500).json({
      message: err.message || err
    })
  }
})

app.post('/vendors/new', async (req: Request, res: Response) => {
  try {
    const { vendorname, phone, statusid } = req.body
    const sameName = await prisma.vvarenavendors.findFirst({
      where: {
        vendorname
      }
    })
    if (sameName) return res.status(409).json({ message: 'Vendor with that name exists...' })
    await prisma.vvarenavendors.create({
      data: {
        vendorname, phone, sales: 0, statusid
      }
    })
    return res.status(200).json({
      message: 'Vendor created successfully'
    })
  } catch (err) {
    return res.status(500).json({
      message: err.message || err
    })
  }
})

const port = process.env.PORT || 5000

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${port}`)
})
