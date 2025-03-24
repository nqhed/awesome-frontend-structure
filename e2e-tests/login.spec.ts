import { expect, test } from "@playwright/test";
import { pwTranslator } from "@/configs/plawright-translator";

test.describe("Login en", () => {
  test("Failed username", async ({ page }) => {
    await page.goto("en/auth/login");
    const helperTextUsername = page.getByTestId(
      "login-form-helper-text-username"
    );
    const buttonSubmit = page.getByTestId("login-form-button-submit");

    buttonSubmit.click();
    await expect(helperTextUsername).toHaveText(
      pwTranslator.messageEn.ERROR.DATA_IS_REQUIRED
    );
  });
});

test.describe("Login vi", () => {
  test("Failed username", async ({ page }) => {
    await page.goto("vi/auth/login");
    const helperTextUsername = page.getByTestId(
      "login-form-helper-text-username"
    );
    const buttonSubmit = page.getByTestId("login-form-button-submit");

    buttonSubmit.click();
    await expect(helperTextUsername).toHaveText(
      pwTranslator.messageVi.ERROR.DATA_IS_REQUIRED
    );
  });
});
