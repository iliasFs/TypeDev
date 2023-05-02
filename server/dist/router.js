"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const snippet_controller_1 = __importDefault(require("./controllers/snippet.controller"));
const router = express_1.default.Router();
router.post("/admin-snippet", snippet_controller_1.default.createAdminSnippet);
router.get("/admin-snippet", snippet_controller_1.default.getAdminSnippets);
router.delete("/admin-snippet/:id", snippet_controller_1.default.deleteAdminSnippet);
router.get("/admin-snippet/:category", snippet_controller_1.default.getByCategory);
exports.default = router;
