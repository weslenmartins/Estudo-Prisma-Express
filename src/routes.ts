import { Router } from 'express';
import { CreateBookController } from './controllers/CreateBookController';
import { CreateCategoryController } from './controllers/CreateCategoryController';
import { CreateBookCategoryController } from './controllers/CreateBookCategoryController';
import { CreateBookWithExistCategory } from './controllers/CreateBookWithExistCategory';
import { FindBookController } from './controllers/FindBookController';
import { FindCategoryController } from './controllers/FindCategoryController';
import { FindAllBooksController } from './controllers/FindAllBooksController';

const router = Router();

const createBook = new CreateBookController()
const createCategory = new CreateCategoryController()
const createBookCategory = new CreateBookCategoryController()
const createBookCategoryWhithExistCategory = new CreateBookWithExistCategory()

const findAllBooksController = new FindAllBooksController()
const findBookController = new FindBookController()
const findCategory = new FindCategoryController();

router.post('/books', createBook.handle);
router.post('/bookWithCategory', createBookCategoryWhithExistCategory.handle);

router.post('/category', createCategory.handle);
router.post('/categoryBook', createBookCategory.handle);

router.get('/books', findAllBooksController.handle);
router.get('/books/:id', findBookController.handle);
router.get("/category/:id", findCategory.handle);

export { router }