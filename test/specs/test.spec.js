import { expect, $ } from "@wdio/globals"; 
import loginPage from "../pageobjects/login.page.js"; 

describe("Test suite", () => {
    beforeEach(async () => {
        await loginPage.open();
    });
    
    it("Should get the page title", async () => {
        const pageTitle = await browser.getTitle();
        expect(pageTitle).toContain("Swag Labs"); 
    });

    it('Test Login form with empty credentials', async () => {
        await loginPage.login('','');
        await loginPage.clickLoginButton();

        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toContain('Epic sadface: Username is required');
    });

    it('Test Login form with credentials by passing Username', async () => {
        await loginPage.login('user', '');
        await loginPage.clickLoginButton();

        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toContain('Epic sadface: Password is required');
    });

    it('Test Login form with valid Username & Password', async () => {
        await loginPage.login('standard_user', 'secret_sauce');
        await loginPage.clickLoginButton();

        const pageTitle = await browser.getTitle();
        expect(pageTitle).toEqual('Swag Labs');
    });
    // it("should show an error message with invalid credentials", async () => {
    //     await loginPage.login("wronguser", "wrongpassword"); 
    //     await loginPage.clickLoginButton();

    //     const errorMessage = await loginPage.getErrorMessage();
    //     expect(errorMessage).toContain("Invalid credentials"); 
    // });

    // it("should clear input fields before entering new data", async () => {
    //     await loginPage.login("testuser", "password123");
    //     await loginPage.clearInputs();
    //     await loginPage.login("newuser", "newpassword");
    //     await loginPage.clickLoginButton();

    //     const welcomeMessage = await $("#welcome-message"); 
    //     await expect(welcomeMessage).toBeDisplayed();
    // });

});
