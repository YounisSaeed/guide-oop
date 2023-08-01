// test srp code 
import { User , UserDatabase , AuthenticationService } from './after';


// add user to Userdatabase
const userDatabase = new UserDatabase();
userDatabase.addUser(new User('younis','password1'));
userDatabase.addUser(new User('zidan','password2'));

// authenticate user

const authenticationService = new AuthenticationService(userDatabase);

const username = 'younis';
const password = 'password1';
if(authenticationService.authenticate(username,password)) {
    console.log(`User  ${username} successfully authenticated `);
} else {
    console.log(` Authenctication Failed for user ${username}`);
}
