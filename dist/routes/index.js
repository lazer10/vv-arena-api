"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vendor_1 = __importDefault(require("./vendor"));
const sales_1 = __importDefault(require("./sales"));
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.json({
        message: 'VVArena API'
    });
});
router.use('/vendors', vendor_1.default);
router.use('/sales', sales_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map