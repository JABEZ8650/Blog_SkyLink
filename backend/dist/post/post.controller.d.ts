import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    create(data: CreatePostDto, req: any): Promise<string>;
    findAll(): Promise<import("../models/post.model").Post[]>;
    myPosts(req: any): Promise<import("../models/post.model").Post[]>;
    findOne(id: string): Promise<import("../models/post.model").Post>;
    findByAuthor(id: string): Promise<import("../models/post.model").Post[]>;
    update(id: string, updatePostDto: UpdatePostDto, req: any): Promise<string>;
    remove(id: string, req: any): Promise<string>;
}
