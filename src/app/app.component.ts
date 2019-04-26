import { Component } from '@angular/core';
import { LibOneService } from 'lib-one'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(private libOneService: LibOneService){ console.log("constructed")}
  title = 'appdemo';
}
