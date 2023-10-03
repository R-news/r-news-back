"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDto = void 0;
class UserDto {
    constructor(model) {
        this.id = model._id;
        this.isActivated = model.isActivated;
        this.username = model.username;
        this.role = model.role;
    }
    toObject() {
        return {
            id: this.id,
            isActivated: this.isActivated,
            username: this.username,
            role: this.role,
        };
    }
}
exports.UserDto = UserDto;
//# sourceMappingURL=user.js.map