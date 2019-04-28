import { Injectable } from '@angular/core';
import {PrivateOneService} from './private-one.service';

@Injectable({
  providedIn: 'root'
})
export class LibOneService {

  constructor(private privateOneService: PrivateOneService) {
    console.log('libOneServiceInstance');
    privateOneService.sayHelo('libOneService');
  }

  forwardHello(input: string) {
      this.privateOneService.sayHelo(input + ' through L1Service');
  }
}
