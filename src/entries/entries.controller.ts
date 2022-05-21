import { Controller, Get } from '@nestjs/common';

@Controller('entries')
export class EntriesController {
  @Get()
  findAll(): string {
    return 'This action returns all diary entries';
  }

}
