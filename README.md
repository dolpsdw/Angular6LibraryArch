Creating ng library:
Library package.json Have to include all Angular (and maybe rxjs and other 3th party) as peerDependences and
*This is required with the objective that Library @angular modules imports take the App main @angular versions
If Library is linked for Dev purpose
	Install all the peerDependences as devDependences (so library can have its own copy)
	APP main have to define at top in tsconfig all the devDependences of your linked librarys to the local node modules
	-> paths:{"@angular/*":["./node_modules/@angular/*"]}
Library modules have to follow the rule of Feature Modules and have no need to imports:[] anything
	import { NgModule } from '@angular/core';
	import { LibOneComponent } from './lib-one.component';

	@NgModule({
	  declarations: [LibOneComponent],
	  imports: [
	  ],
	  exports: [LibOneComponent]
	})
	export class LibOneModule { }
Library services should follow the new Injectable decorator
	import { Injectable } from '@angular/core';

	@Injectable({
	  providedIn: 'root'
	})
	export class LibOneService {

	  constructor() { }
	}
If the service constructor needs other services them have to be providedIn the same module (root | libModule)
Librarys have to expose a public api with the external available components|pipes|services|modules for consum

	export * from './lib/lib-one.service';
	export * from './lib/lib-one.component';
	export * from './lib/lib-one.module';

APP main application auto adds paths to tsconfig
	When you import something from a library in the APP, Angular looks for a mapped library name to a location on disk
	When you install a library package, the mapping is in the node_modules folder
	When you DEVELOPING build your own library, it has to find the mapping in your tsconfig paths

Library it is posible to define the output folder of the build (for dev) to be in node_modules, wich will allow ng-watch to work
	"dest": "../../node_modules/lib-one"

When you have only #nameLib on the tsconfig path all your imports from outside the library will require #nameLib public-api exports
      "lib-one": [
        "dist/lib-one"
      ],
When you need components from inside the library, importing the module from APP will grant acces to them.
	import { LibOneModule } from 'lib-one'
	@NgModule({
	  declarations: [
	    AppComponent
	  ],
	  imports: [
	  ...
	    LibOneModule
	  ],
Now you can use them in html child of that module
	<lib-libOne></lib-libOne>
When you need services from inside the library, importing the required service in anywhere of the APP and use DI
	import { LibOneService } from 'lib-one'
	constructor(private libOneService: LibOneService){ console.log("constructed")}