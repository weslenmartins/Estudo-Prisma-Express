import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class FindBookController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const book = await prismaClient.book.findFirst({
      where: {
        id,
      },
      include: {
        BookCategory: {
          include: {
            category: true,
          },
        },
      },
    })

    return response.json(book);
  }
}