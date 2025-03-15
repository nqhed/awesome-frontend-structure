import * as authSchema from "./auth.schema";
import * as authController from "./auth.controller";

export * as authDto from "./auth.dto";

export const auth = {
  ...authSchema,
  ...authController,
};
