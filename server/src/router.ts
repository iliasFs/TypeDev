import express from "express";
import SnippetController from "./controllers/snippet.controller";

const router = express.Router();

router.post("/admin-snippet", SnippetController.createAdminSnippet);
router.get("/admin-snippet", SnippetController.getAdminSnippets);
router.delete("/admin-snippet/:id", SnippetController.deleteAdminSnippet);
router.get("/admin-snippet/:category", SnippetController.getByCategory);
export default router;
