import * as authDto from "./auth.dto";
import * as authHttp from "./auth.http";
import * as authSchema from "./auth.schema";

export const login = async (input: authDto.LoginInput) => {
  if (authSchema.loginInputSchema.safeParse(input.payload).success === false) {
    throw new Error("INVALID_INPUT");
  }
  try {
    return (await authHttp.login(input)).data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
