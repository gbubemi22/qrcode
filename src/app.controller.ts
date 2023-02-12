import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import * as qrcode from 'qrcode';
import movies from './movies.json';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    const link = `https://gist.github.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4`;
    const qrCode = await qrcode.toDataURL(link);

    return qrCode;
  }
}
