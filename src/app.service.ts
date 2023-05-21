import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return { Get: '/books', post: '/books', search: '/:id' };
  }
}
