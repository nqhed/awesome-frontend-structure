import validator from "@/lib/validator";
import * as models from "@/services/_models";
import * as authSchema from "./auth.schema";

// Login
export type LoginInput = validator.infer<typeof authSchema.loginInputSchema>;
export type LoginOutput = ApiGeneralResponse<models.UserModel>;
