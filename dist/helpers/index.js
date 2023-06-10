"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toJson = void 0;
const toJson = (data) => {
    return JSON.parse(JSON.stringify(data, (_, v) => (typeof v === 'bigint'
        ? `${v}n` : v)).replace(/"(-?\d+)n"/g, (_, a) => a));
};
exports.toJson = toJson;
//# sourceMappingURL=index.js.map