import prisma from "../lib/prisma";
import User from "./User";

class Snippet {
  constructor(
    public id: number,
    public body: string,
    public category: string,
    public difficulty: string,
    public User?: Partial<User>
  ) {}

  static async adminCreate(
    newBody: string,
    newCategory: string,
    newDifficulty: string
  ): Promise<Snippet> {
    const { id, body, category, difficulty } = await prisma.snippet.create({
      data: { body: newBody, category: newCategory, difficulty: newDifficulty },
    });

    return new Snippet(id, body, category, difficulty);
  }

  static async userCreate(
    userId: number,
    newBody: string,
    newCategory: string,
    newDifficulty: string
  ): Promise<Snippet | null> {
    const { id } = await prisma.snippet.create({
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
  }

  static async getAll(): Promise<Snippet[]> {
    return await prisma.snippet.findMany();
  }

  static async findByCategory(category: string): Promise<Snippet[]> {
    return prisma.snippet.findMany({
      where: {
        category,
      },
    });
  }
}

export default Snippet;
