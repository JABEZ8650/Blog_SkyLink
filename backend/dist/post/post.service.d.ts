import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from 'src/models/post.model';
export declare class PostService {
    private readonly postModel;
    constructor(postModel: typeof Post);
    create(data: CreatePostDto, user: any): Promise<string>;
    findAll(): Promise<Post[]>;
    findOne(id: number): Promise<Post>;
    findByAuthor(id: number): Promise<Post[]>;
    update(id: number, update: UpdatePostDto, userId: number): Promise<string>;
    remove(id: number, userId: number): Promise<string>;
}
