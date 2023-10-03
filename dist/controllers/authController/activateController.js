"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activateController = void 0;
const authService_1 = require("@src/services/authService");
const activateController = async (req, res) => {
    await authService_1.authService.activate(req.params.link);
    return res.redirect(process.env.CLIENT_URL);
};
exports.activateController = activateController;
//# sourceMappingURL=activateController.js.map