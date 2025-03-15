import { Lib } from "@/lib";
import * as authDto from "./auth.dto";

export const login = (
  input: authDto.LoginInput,
): Promise<authDto.LoginOutput> => {
  return Lib.httpClient.post(
    Lib.utils.applyPrefix({
      prefix: "none",
      url: Lib.utils.joinUrls({
        urls: [
          Lib.CONSTANTS.API_URLS.AUTH.BASE,
          Lib.CONSTANTS.API_URLS.AUTH.LOGIN,
        ],
        isAbsolute: true,
      }),
    }),
    input,
  );
};
