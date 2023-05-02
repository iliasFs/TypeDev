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
const Snippet_1 = __importDefault(require("../models/Snippet"));
const SnippetController = {
    createAdminSnippet(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { body, category, difficulty } = req.body;
                const snippet = yield Snippet_1.default.adminCreate(body, category, difficulty);
                res.status(201).json(snippet);
            }
            catch (e) {
                next(e);
            }
        });
    },
    getAdminSnippets(_, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const snippets = yield Snippet_1.default.getAll();
                res.status(200).json(snippets);
            }
            catch (e) {
                next(e);
            }
        });
    },
    deleteAdminSnippet(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield Snippet_1.default.deleteSnippet(parseInt(id));
                res.status(201).json(`the snippet with id:${id} is deleted`);
            }
            catch (e) {
                next(e);
            }
        });
    },
    getByCategory(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { category } = req.params;
                const categorySnippets = yield Snippet_1.default.findByCategory(category);
                res.status(201).json(categorySnippets);
            }
            catch (e) {
                next(e);
            }
        });
    },
};
exports.default = SnippetController;
