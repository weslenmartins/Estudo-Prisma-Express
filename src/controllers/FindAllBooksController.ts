import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class FindAllBooksController {
  async handle(request: Request, response: Response) {
    const book = await prismaClient.book.findMany()

    return response.json(book);
  }
}