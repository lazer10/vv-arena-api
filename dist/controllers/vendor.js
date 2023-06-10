"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vendor_1 = __importDefault(require("../services/vendor"));
class VendorController {
    static async fetchAllVendors(req, res) {
        try {
            const vendors = await vendor_1.default.fetchAllVendors();
            return res.status(200).json({
                message: 'Vendors fetched successfully...',
                data: vendors
            });
        }
        catch (err) {
            return res.status(500).json({
                message: err.message || err
            });
        }
    }
    static async createVendor(req, res) {
        try {
            const { vendorname, phone, statusid } = req.body;
            const sameName = await vendor_1.default.fetchSingleVendor({ vendorname });
            if (sameName)
                return res.status(409).json({ message: 'Vendor with that name exists...' });
            await vendor_1.default.createVendor(vendorname, phone, statusid);
            return res.status(200).json({
                message: 'Vendor created successfully'
            });
        }
        catch (err) {
            return res.status(500).json({
                message: err.message || err
            });
        }
    }
    static async updateVendor(req, res) {
        try {
            const vendor = await vendor_1.default.fetchSingleVendor({ vendorid: Number(req.params.id) });
            if (!vendor)
                return res.status(404).json({ message: 'Vendor not found...' });
            const { phone, vendorname, statusid, sales } = req.body;
            const updatedVendor = await vendor_1.default.updateVendor({ vendorid: Number(req.params.id) }, { phone, vendorname, statusid, sales });
            return res.status(200).json({
                message: 'Vendor updated successfully',
                data: updatedVendor
            });
        }
        catch (err) {
            return res.status(500).json({
                message: err.message || err
            });
        }
    }
}
exports.default = VendorController;
//# sourceMappingURL=vendor.js.map