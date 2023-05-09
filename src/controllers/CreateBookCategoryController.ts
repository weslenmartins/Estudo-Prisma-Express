import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class CreateBookCategoryController {
  async handle(request: Request, response: Response) {
    const { id_book, id_category } = request.body;

    const bookCategory = await prismaClient.bookCategory.create({
      data: {
        id_book,
        id_category
      }
    })

    return response.json(bookCategory);
  }
}