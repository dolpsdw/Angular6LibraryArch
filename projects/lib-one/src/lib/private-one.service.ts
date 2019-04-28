import { Injectable } from '@angular/core';
import {ServiceResolverModule} from './service-resolver/service-resolver.module';

@Injectable({
  providedIn: ServiceResolverModule
})
export class PrivateOneService {

  constructor() {
    console.log('privateOne generated');
  }

  sayHelo(input: string) {
    console.log(input + ' helo from private');
  }
}
