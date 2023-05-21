/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Book {
  @Prop()
  author: string;

  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  imageurl: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
