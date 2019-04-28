import { Component, OnInit } from '@angular/core';
import {LibOneService} from 'lib-one';

@Component({
  selector: 'lib-libTwo',
  template: `
    <p>
      lib-two works!
    </p>
  `,
  styles: []
})
export class LibTwoComponent implements OnInit {

  constructor(private libOneService: LibOneService ) {
    libOneService.forwardHello('LibTwo');
  }

  ngOnInit() {
  }

}
