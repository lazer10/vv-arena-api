"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
const sales_1 = __importDefault(require("../services/sales"));
class SalesController {
    static async fetchAllSales(req, res) {
        try {
            const { vendor, startDate, endDate } = req.body;
            let sales = await sales_1.default.fetchAllSales({
                salesdate: {
                    lte: endDate,
                    gte: startDate
                }
            });
            if (vendor !== '') {
                sales = await sales.filter((s) => s.vendorid === Number(vendor));
            }
            const jsonSales = await (0, helpers_1.toJson)(sales);
            return res.status(200).json({
                message: 'All sales fetched successfully',
                data: jsonSales
            });
        }
        catch (err) {
            return res.status(500).json({
                message: err.message || err
            });
        }
    }
}
exports.default = SalesController;
//# sourceMappingURL=sales.js.map