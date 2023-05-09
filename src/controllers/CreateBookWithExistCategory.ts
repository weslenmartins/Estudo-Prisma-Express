import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateBookWithExistCategory {
  async handle(request: Request, response: Response) {
    const { name, bar_code, url, id_category } = request.body;

    const book = await prismaClient.bookCategory.create({
      data: {
        book: {
          create: {
            bar_code,
            name,
            url
          },
        },
        category: {
          connect: {
            id: id_category,
          },
        },
      },
    });

    return response.json(book);
  }
}