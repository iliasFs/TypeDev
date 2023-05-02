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
class User {
    constructor(id, firstName, lastName, password, snippets) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.snippets = snippets;
    }
    static create(firstName, lastName, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = yield prisma_1.default.user.create({
                data: {
                    firstName,
                    lastName,
                    password,
                },
            });
            return new User(id, firstName, lastName, password);
        });
    }
    static update(id, newFirstName, newLastName) {
        return __awaiter(this, void 0, void 0, function* () {
            const { firstName, lastName } = yield prisma_1.default.user.update({
                where: { id },
                data: { firstName: newFirstName, lastName: newLastName },
            });
            return new User(id, firstName, lastName);
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const { firstName, lastName } = yield prisma_1.default.user.delete({
                where: { id },
            });
            return { id, firstName: firstName, lastName: lastName };
        });
    }
}
exports.default = User;
// id        Int       @id @default(autoincrement())
//   createdAt DateTime  @default(now())
//   updatedAt DateTime  @updatedAt
//   firstName String
//   lastName  String
//   email     String
//   password  String
//   Snippets  Snippet[]
