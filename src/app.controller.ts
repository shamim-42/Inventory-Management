import { Controller, Get, Query, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  @Get('getInfo')
  getUserInfo(@Query() query) {
    console.log(query);
    return 'Use this jwt token as Bearer in Graphql query/mutation: ' + query.jwt;
  }
}
