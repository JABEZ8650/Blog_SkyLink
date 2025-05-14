import { User } from 'src/models/user.model';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: typeof User);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    remove(id: number): Promise<string>;
}
