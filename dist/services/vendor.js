"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_instance_1 = __importDefault(require("../prisma-instance"));
class VendorService {
    static async fetchAllVendors() {
        try {
            return await prisma_instance_1.default.vvarenavendors.findMany();
        }
        catch (err) {
            throw err;
        }
    }
    static async createVendor(vendorname, phone, statusid) {
        try {
            return await prisma_instance_1.default.vvarenavendors.create({
                data: {
                    vendorname, phone, sales: 0, statusid
                }
            });
        }
        catch (err) {
            throw err;
        }
    }
    static async fetchSingleVendor(filter) {
        try {
            return await prisma_instance_1.default.vvarenavendors.findFirst({
                where: filter
            });
        }
        catch (err) {
            throw err;
        }
    }
    static async updateVendor(filter, update) {
        try {
            return await prisma_instance_1.default.vvarenavendors.update({
                where: filter,
                data: update
            });
        }
        catch (err) {
            throw err;
        }
    }
}
exports.default = VendorService;
//# sourceMappingURL=vendor.js.map