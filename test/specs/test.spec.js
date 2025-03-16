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
    
    it("should show an error message with invalid credentials", async () => {
        await loginPage.login("wronguser", "wrongpassword"); 
        await loginPage.clickLoginButton();

        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toContain("Epic sadface: Username and password do not match any user in this service"); 
    });

    it('Test Login form with valid Username & Password', async () => {
        await loginPage.login('standard_user', 'secret_sauce');
        await loginPage.clickLoginButton();

        const pageTitle = await browser.getTitle();
        expect(pageTitle).toEqual('Swag Labs');
    });    
});
