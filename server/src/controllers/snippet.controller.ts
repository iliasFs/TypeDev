import { NextFunction, Request, Response } from "express";
import Snippet from "../models/Snippet";

const SnippetController = {
  async createAdminSnippet(req: Request, res: Response, next: NextFunction) {
    try {
      const { body, category, difficulty } = req.body;
      const snippet = await Snippet.adminCreate(body, category, difficulty);
      res.status(201).json(snippet);
    } catch (e) {
      next(e);
    }
  },
  async getAdminSnippets(_: Request, res: Response, next: NextFunction) {
    try {
      const snippets = await Snippet.getAll();
      res.status(200).json(snippets);
    } catch (e) {
      next(e);
    }
  },
  async deleteAdminSnippet(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await Snippet.deleteSnippet(parseInt(id));
      res.status(201).json(`the snippet with id:${id} is deleted`);
    } catch (e) {
      next(e);
    }
  },
  async getByCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const { category } = req.params;
      const categorySnippets = await Snippet.findByCategory(category);
      res.status(201).json(categorySnippets);
    } catch (e) {
      next(e);
    }
  },
};

export default SnippetController;
