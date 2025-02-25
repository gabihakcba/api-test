import { Controller, Get, Req, Res } from '@nestjs/common';
import { HelloService } from './hello.service';
import { Request, Response } from 'express';

@Controller('hello')
export class HelloController {
  constructor(private helloService: HelloService) {}

  @Get('/')
  hello(@Req() request: Request, @Res() response: Response) {
    response.status(200).json({ message: this.helloService.hello() });
  }
}
