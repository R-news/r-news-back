"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncWrapper = void 0;
const asyncWrapper = (ctrl) => {
    const func = async (req, res, next) => {
        try {
            await ctrl(req, res, next);
        }
        catch (e) {
            next(e);
        }
    };
    return func;
};
exports.asyncWrapper = asyncWrapper;
//# sourceMappingURL=asyncWrapper.js.map