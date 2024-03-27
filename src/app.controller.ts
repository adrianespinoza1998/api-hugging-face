import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ImgToTextDto } from './dtos/img-to-text.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('img-to-text')
  async imgToText(@Body() body: ImgToTextDto) {
    return await this.appService.imgToText(body.url);
  }
}
