import { Lib } from "@/lib";

const { validator } = Lib;

export const loginInputSchema = validator.object({
  username: validator
    .string({ message: "ERROR.DATA_IS_REQUIRED" })
    .trim()
    .min(1, { message: "ERROR.DATA_IS_REQUIRED" }),
  password: validator
    .string({ message: "ERROR.DATA_IS_REQUIRED" })
    .trim()
    .min(1, { message: "ERROR.DATA_IS_REQUIRED" }),
});
