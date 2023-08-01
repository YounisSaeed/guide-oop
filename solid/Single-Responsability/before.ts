// bad example of oop before using SRP

class Authenticationservice {
    private users: Map<string, {username: string; password:string}> = new Map();

    constructor() {
        this.users.set('user1', {username: 'user1' , password: 'password1'});
        this.users.set('user1', {username: 'user1' , password: 'password1'});
    }

    public authenticate(username:string , password: string ): boolean {
        const user = this.users.get(username);
        if (!user) {
            return false;
        }
        return user.password === password;
    }

    public changePassword(username: string , newPassword: string): boolean {
        const user = this.users.get(username);
        if (!user){
            return false;
        }
        user.password = newPassword
        return true;
    }
    public addUser(username:string,password:string): boolean {
        if (this.users.has(username)) {
            return false;
        }
        this.users.set(username, {username,password});
        return true;
    }
    public removeUser(username: string):boolean {
        return this.users.delete(username);
    }
}