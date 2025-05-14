import { Model } from "sequelize-typescript";
export declare class User extends Model {
    userId: number;
    name: string;
    email: string;
    password: string;
}
