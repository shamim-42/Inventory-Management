import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  @Get('getInfo')
  getUserInfo() {
    return "Bismillah"
  }
}
