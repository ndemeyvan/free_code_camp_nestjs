import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('### REQUEST : ' + req);
    console.log('### ');
    console.log('### RESPONSE : ' + res);
    next();
  }
}
