"use strict";
// After Applying SRP
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationService = exports.UserDatabase = exports.User = void 0;
// class for user
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    getUsername() {
        return this.username;
    }
    getPassword() {
        return this.password;
    }
    setPassword(newPassword) {
        this.password = newPassword;
    }
}
exports.User = User;
// class for user database
class UserDatabase {
    constructor() {
        this.users = new Map();
    }
    addUser(user) {
        if (this.users.has(user.getUsername())) {
            return false;
        }
        this.users.set(user.getUsername(), user);
        return true;
    }
    removeUser(username) {
        return this.users.delete(username);
    }
    getUser(username) {
        return this.users.get(username);
    }
}
exports.UserDatabase = UserDatabase;
// class authentication Service
class AuthenticationService {
    constructor(userDatabase) {
        this.userDatabase = userDatabase;
    }
    authenticate(username, password) {
        const user = this.userDatabase.getUser(username);
        if (!user) {
            return false;
        }
        return user.getPassword() === password;
    }
    changePassword(username, newPassword) {
        const user = this.userDatabase.getUser(username);
        if (!user) {
            return false;
        }
        user.setPassword(newPassword);
        return true;
    }
}
exports.AuthenticationService = AuthenticationService;
