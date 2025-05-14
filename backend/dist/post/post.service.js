"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const post_model_1 = require("../models/post.model");
let PostService = class PostService {
    constructor(postModel) {
        this.postModel = postModel;
    }
    async create(data, user) {
        const currentDate = new Date().toDateString();
        try {
            const post = await this.postModel.create({
                title: data.title,
                content: data.content,
                isPublished: data.isPublished,
                authorId: user.id,
                date: currentDate
            });
            return "Post added";
        }
        catch (error) {
            throw new common_1.BadRequestException("Post Not Added");
        }
    }
    async findAll() {
        return await this.postModel.findAll();
    }
    async findOne(id) {
        const post = await this.postModel.findByPk(id);
        if (!post) {
            throw new common_1.BadRequestException("Post Not Found");
        }
        return post;
    }
    async findByAuthor(id) {
        const post = await this.postModel.findAll({ where: { authorId: id } });
        if (!post) {
            throw new common_1.BadRequestException("Post Not Found");
        }
        return post;
    }
    async update(id, update, userId) {
        const post = await this.postModel.findByPk(id);
        if (post && post.authorId == userId) {
            try {
                await post.update({
                    title: update.title,
                    content: update.content,
                    isPublished: update.isPublished,
                });
                return "Post Updated";
            }
            catch (error) {
                throw new common_1.BadRequestException("Not updated");
            }
        }
        throw new common_1.NotFoundException("Post Not Found");
    }
    async remove(id, userId) {
        const post = await this.postModel.findByPk(id);
        if (post && post.authorId == userId) {
            try {
                this.postModel.destroy({ where: { postId: id } });
                return "Post deleted";
            }
            catch (error) {
                throw new common_1.BadRequestException("Not removed");
            }
        }
        else {
            throw new common_1.NotFoundException("Invalid Post");
        }
    }
};
exports.PostService = PostService;
exports.PostService = PostService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(post_model_1.Post)),
    __metadata("design:paramtypes", [Object])
], PostService);
//# sourceMappingURL=post.service.js.map