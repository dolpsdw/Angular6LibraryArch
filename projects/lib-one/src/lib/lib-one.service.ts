import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibOneService {

  constructor() { console.log("libOneInstance") }
}
