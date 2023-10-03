"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const cutomErrors_1 = require("@src/utils/erros/cutomErrors");
const errorMiddleware = (err, req, res, next) => {
    if (err instanceof cutomErrors_1.ApiError) {
        return res
            .status(err.status)
            .json({ message: err.message, errors: err.errors });
    }
    next();
    console.log(err);
    return res.status(500).json({ message: 'Unexpected error' });
};
exports.errorMiddleware = errorMiddleware;
//# sourceMappingURL=errorMiddleware.js.map