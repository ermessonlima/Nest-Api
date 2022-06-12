import { Controller, Get } from '@nestjs/common';
import { TesteService } from './teste.service';

@Controller()
export class TesteController {
  constructor(private readonly testeService: TesteService) {}

  @Get('bb')
  getHello(): string {
    return this.testeService.getHello();
  }
}
