"use strict";
// bad example of oop before using SRP
class Authenticationservice {
    constructor() {
        this.users = new Map();
        this.users.set('user1', { username: 'user1', password: 'password1' });
        this.users.set('user1', { username: 'user1', password: 'password1' });
    }
    authenticate(username, password) {
        const user = this.users.get(username);
        if (!user) {
            return false;
        }
        return user.password === password;
    }
    changePassword(username, newPassword) {
        const user = this.users.get(username);
        if (!user) {
            return false;
        }
        user.password = newPassword;
        return true;
    }
    addUser(username, password) {
        if (this.users.has(username)) {
            return false;
        }
        this.users.set(username, { username, password });
        return true;
    }
    removeUser(username) {
        return this.users.delete(username);
    }
}
