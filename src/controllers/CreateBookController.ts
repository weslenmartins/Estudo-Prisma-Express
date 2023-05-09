import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class CreateBookController {
  async handle(request: Request, response: Response) {
    const { name, bar_code, url } = request.body;

    const book = await prismaClient.book.create({
      data: {
        name,
        bar_code,
        url
      }
    })

    return response.json(book);
  }
}