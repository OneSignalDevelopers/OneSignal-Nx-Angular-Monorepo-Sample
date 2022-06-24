import { Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('employees')
  getData() {
    return this.appService.getData();
  }

  @Post('addEmployee')
  addEmployee() {
    return this.appService.addEmployee();
  }
}
