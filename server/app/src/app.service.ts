import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(){}

  getHello(): string {
    console.log('----test----')
    return 'Hello World!';
  }
}
