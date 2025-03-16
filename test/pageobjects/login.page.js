import { $ } from '@wdio/globals';
import Page from './page.js';

class LoginPage extends Page {
    get loginButton() {
        return $('input[data-test="login-button"]');
    }

    get inputUsername() {
        return $('input[data-test="username"]');
    }

    get inputPassword() {
        return $('input[data-test="password"]');
    }

    get errorMessage() {
        return $('h3[data-test="error"]');
    }

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
    }    
    
    async resetLoginForm() {
        await this.inputUsername.setValue('');
        await this.inputPassword.setValue('');
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async getErrorMessage() {
        return this.errorMessage.getText();
    }
}

export default new LoginPage();
