"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// test srp code 
const after_1 = require("./after");
// add user to Userdatabase
const userDatabase = new after_1.UserDatabase();
userDatabase.addUser(new after_1.User('younis', 'password1'));
userDatabase.addUser(new after_1.User('zidan', 'password2'));
// authenticate user
const authenticationService = new after_1.AuthenticationService(userDatabase);
const username = 'younis';
const password = 'password1';
if (authenticationService.authenticate(username, password)) {
    console.log(`User  ${username} successfully authenticated `);
}
else {
    console.log(` Authenctication Failed for user ${username}`);
}
