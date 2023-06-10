"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_instance_1 = __importDefault(require("../prisma-instance"));
class SalesService {
    static async fetchAllSales(filter) {
        try {
            return await prisma_instance_1.default.vvarenasales.findMany({
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
            });
        }
        catch (err) {
            throw err;
        }
    }
}
exports.default = SalesService;
//# sourceMappingURL=sales.js.map