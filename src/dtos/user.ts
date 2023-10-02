import { IUser, userTypes } from 'models';
import { ObjectId } from 'mongoose';

export class UserDto {
    id: ObjectId;
    isActivated: boolean;
    username: string;
    role: userTypes;

    constructor(model: IUser) {
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
