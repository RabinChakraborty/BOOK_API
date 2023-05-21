import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from 'src/schemas/book.schemas';
import { CreateBookDto } from 'src/dto/createBook.dto';
import { UpdateBookDto } from 'src/dto/updateBook.dto';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  //get all books
  @Get()
  async getAllBooks(): Promise<Book[]> {
    return this.bookService.findAll();
  }
  //post a book
  @Post()
  async createBook(
    @Body()
    book: CreateBookDto,
  ): Promise<Book> {
    return this.bookService.create(book);
  }
  //get a book by id
  @Get(':id')
  async getBook(
    @Param('id')
    id: string,
  ): Promise<Book> {
    return this.bookService.findById(id);
  }
  //update book info by id
  @Put(':id')
  async updateBook(
    @Param('id')
    id: string,
    @Body()
    book: UpdateBookDto,
  ): Promise<Book> {
    return this.bookService.updateById(id, book);
  }
  //delete a book by id
  @Delete(':id')
  async deleteBook(
    @Param('id')
    id: string,
  ): Promise<Book> {
    return this.bookService.deleteById(id);
  }
}
