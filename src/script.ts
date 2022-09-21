import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main () {
    const vendors = await prisma.vvarenavendors.findMany()
    console.log(vendors)
}

main()
.catch(e => {
    console.error(e.message)
})
.finally(async () => {
    await prisma.$disconnect()
})