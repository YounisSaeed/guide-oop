// After Applying SRP



// class for user
export class User {
    private username: string;
    private password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
    public getUsername(): string {
        return this.username;
    }

    public getPassword(): string {
        return this.password;
    }
    public setPassword(newPassword: string ): void {
        this.password = newPassword
    }
}

// class for user database
export class UserDatabase {
    private users: Map<string, User> = new Map();

    public addUser(user: User): boolean {
        if(this.users.has(user.getUsername())) {
            return false;
        }
        this.users.set(user.getUsername(), user);
        return true;
    }

    public removeUser(username: string):boolean {
        return this.users.delete(username);
    }

    public getUser(username: string): User | undefined {
        return this.users.get(username)
    }
}

// class authentication Service
export class AuthenticationService {
    private userDatabase: UserDatabase;
    constructor(userDatabase: UserDatabase) {
        this.userDatabase = userDatabase;
    }
    public authenticate(username: string , password: string): boolean {
        const user = this.userDatabase.getUser(username);
        if(!user) {
            return false
        }
        return user.getPassword() === password;
    }

    public changePassword(username: string, newPassword: string): boolean {
        const user = this.userDatabase.getUser(username);
        if(!user){
            return false;
        }
        user.setPassword(newPassword);
        return true;
    }
}