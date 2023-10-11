import { isValidObjectId } from "mongoose";

export const validateIdInJoiSchema = (value, helpers) => {
    if (!isValidObjectId(value)) {
      return helpers.error('any.invalid');
    }
    return value;
  };