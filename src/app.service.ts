import {Injectable} from '@nestjs/common';

@Injectable()
export class AppService {

    getHello(): string {
        return 'Hello World!';
    }

    getBenni(): string {
        return 'Benni2'
    }
}
