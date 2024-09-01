import { Controller, Logger, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {

  private readonly logger = new Logger(AppController.name);

  constructor(private readonly appService: AppService) {}

  @Get()
  init(@Req() req: Request, @Res() res: Response): void {
    res.render('app');
  }
}
