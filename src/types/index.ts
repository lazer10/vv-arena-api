export type findVendorType = {
    vendorname?: string
    vendorid?: number
}

export type updateVendorBodyType = {
    phone: string
    vendorname: string
    statusid: number
    sales: number
}

export type fetchAllVendorsFilterType = {
    salesdate?: {
        lte: any
        gte: any
    }
}