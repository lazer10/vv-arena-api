"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vendor_1 = __importDefault(require("../controllers/vendor"));
const router = (0, express_1.Router)();
router.get('/', vendor_1.default.fetchAllVendors);
router.post('/new', vendor_1.default.createVendor);
router.put('/:id/update', vendor_1.default.updateVendor);
exports.default = router;
//# sourceMappingURL=vendor.js.map