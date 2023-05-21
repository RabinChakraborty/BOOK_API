import { BookService } from './book.service';
import { Book } from 'src/schemas/book.schemas';
import { CreateBookDto } from 'src/dto/createBook.dto';
import { UpdateBookDto } from 'src/dto/updateBook.dto';
export declare class BookController {
    private bookService;
    constructor(bookService: BookService);
    getAllBooks(): Promise<Book[]>;
    createBook(book: CreateBookDto): Promise<Book>;
    getBook(id: string): Promise<Book>;
    updateBook(id: string, book: UpdateBookDto): Promise<Book>;
    deleteBook(id: string): Promise<Book>;
}
