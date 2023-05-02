"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../lib/prisma"));
class Snippet {
    constructor(id, body, category, difficulty, User) {
        this.id = id;
        this.body = body;
        this.category = category;
        this.difficulty = difficulty;
        this.User = User;
    }
    static adminCreate(newBody, newCategory, newDifficulty) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, body, category, difficulty } = yield prisma_1.default.snippet.create({
                data: { body: newBody, category: newCategory, difficulty: newDifficulty },
            });
            return new Snippet(id, body, category, difficulty);
        });
    }
    static userCreate(userId, newBody, newCategory, newDifficulty) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = yield prisma_1.default.snippet.create({
                data: {
                    body: newBody,
                    category: newCategory,
                    difficulty: newDifficulty,
                    User: {
                        connect: { id: userId },
                    },
                },
            });
            return new Snippet(id, newBody, newCategory, newDifficulty);
        });
    }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.default.snippet.findMany();
        });
    }
    static findByCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma_1.default.snippet.findMany({
                where: {
                    category: category,
                },
            });
        });
    }
    static deleteSnippet(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma_1.default.snippet.delete({
                where: {
                    id,
                },
            });
        });
    }
}
exports.default = Snippet;
