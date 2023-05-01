import prisma from "../lib/prisma";
import Snippet from "./Snippet";
class User {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    readonly password?: string,
    public snippets?: Array<Snippet>
  ) {}

  static async create(
    firstName: string,
    lastName: string,
    password: string
  ): Promise<User> {
    const { id } = await prisma.user.create({
      data: {
        firstName,
        lastName,
        password,
      },
    });
    return new User(id, firstName, lastName, password);
  }

  static async update(
    id: number,
    newFirstName: string,
    newLastName: string
  ): Promise<User> {
    const { firstName, lastName } = await prisma.user.update({
      where: { id },
      data: { firstName: newFirstName, lastName: newLastName },
    });
    return new User(id, firstName, lastName);
  }

  static async delete(id: number): Promise<User> {
    const { firstName, lastName } = await prisma.user.delete({
      where: { id },
    });

    return { id, firstName: firstName, lastName: lastName };
  }
}

export default User;

// id        Int       @id @default(autoincrement())
//   createdAt DateTime  @default(now())
//   updatedAt DateTime  @updatedAt
//   firstName String
//   lastName  String
//   email     String
//   password  String
//   Snippets  Snippet[]
