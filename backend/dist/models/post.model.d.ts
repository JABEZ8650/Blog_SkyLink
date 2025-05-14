import { Model } from "sequelize-typescript";
import { User } from "./user.model";
export declare class Post extends Model {
    postId: number;
    title: string;
    content: string;
    isPublished: boolean;
    authorId: number;
    author: User;
    date: string;
}
