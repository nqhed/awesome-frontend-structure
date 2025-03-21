import { expect } from "@playwright/test";
import { testWithTranslator } from "@/configs/playwright-translator";
const test = testWithTranslator;

test.describe("Login", () => {
  test.afterEach(async ({ page }) => {
    page.reload();
  });
  test("Failed username", async ({ page, translatorFix }) => {
    await page.goto("/auth/login");
    
    const helperTextUsername = page.getByTestId(
      "login-form-helper-text-username",
    );
    const buttonSubmit = page.getByTestId("login-form-button-submit");

    buttonSubmit.click();
    await expect(helperTextUsername).toHaveText(
      translatorFix.t("message:ERROR.DATA_IS_REQUIRED"),
    );
  });
});
