import { Injectable } from '@nestjs/common';

@Injectable()
export class TesteService {
  getHello(): string {
    return 'Hello Worlkkdaa!';
  }
}
