"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sales_1 = __importDefault(require("../controllers/sales"));
const router = (0, express_1.Router)();
router.post('/', sales_1.default.fetchAllSales);
exports.default = router;
//# sourceMappingURL=sales.js.map