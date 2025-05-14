import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<import("../models/user.model").User[]>;
    Hello(): string;
    getMyInfo(req: any): any;
    findOne(id: string): Promise<import("../models/user.model").User>;
    remove(id: string): Promise<string>;
}
