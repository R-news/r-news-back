"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const main_1 = __importDefault(require("./main"));
const environment_1 = require("@src/environments/environment");
mongoose_1.default.connect((0, environment_1.getEnvironmentVariables)().db_host)
    .then(() => {
    main_1.default.listen((0, environment_1.getEnvironmentVariables)().port, () => {
        console.log(`Server running. Use our API on port: ${(0, environment_1.getEnvironmentVariables)().port}`);
    });
})
    .catch(error => {
    console.log(error.message);
    process.exit(1);
});
//# sourceMappingURL=server.js.map