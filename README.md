#NG library arch notes:
###Library package.json  
**Have to include all Angular (and maybe rxjs and other 3th party) as peerDependences.**  
*This is required with the objective that Library @angular modules imports, take the App main versions.*

**If Library is linked for Dev purpose:**  
Install all the peerDependences as devDependences (so library can have its own copy).
APP main have to define at top in tsconfig all the devDependences of your linked librarys to the local node modules.
```
paths:{
  "@angular/*":["./node_modules/@angular/*"],
  }
```
**Library modules have to follow the rule of Feature Modules https://angular.io/guide/feature-modules**
```
import { NgModule } from '@angular/core';
import { LibOneComponent } from './lib-one.component';

@NgModule({
  declarations: [LibOneComponent],
  imports: [
  ],
  exports: [LibOneComponent]
})
export class LibOneModule { }
```
**Library services should follow the new Injectable decorator**
```
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'|BlaBlaModule
})
export class LibOneService {

  constructor() { }
}
```
**If the service constructor needs other services:**  
The other service have to be providedIn the same module or parent above (root | libModule)

**Libraries have to expose a public api with the external available components|pipes|services|modules for consume**
```
export * from './lib/lib-one.service';
export * from './lib/lib-one.component';
export * from './lib/lib-one.module';
```
**APP main application auto adds paths to tsconfig**  
When you import something from a library in the APP, Angular looks for a mapped library name to a location on disk:  
* When you install a library package, the mapping is in the node_modules folder  
* When you DEVELOPING build your own library, it has to find the mapping in your tsconfig paths

Library it is posible to define the output folder of the build (for dev ng-package.json) to be in node_modules, wich will allow ng-watch to work  
`"dest": "../../node_modules/lib-one"`  
*\*But is not necessary if you properly map tsconfig*

When you have only #nameLib on the tsconfig path all your imports from outside the library will require #nameLib public-api exports
```
"lib-one": [
  "dist/lib-one"
],
```
**When you need components from inside the library:**  
Importing the module where declared (or parent one??) from APP will grant access to them.
```
import { LibOneModule } from 'lib-one'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  ...
    LibOneModule
  ],
```
Now you can use them in html child of that module
```
............On AppComponent Template..............
<libOneComponent></libOneComponent>
```
**When the APP need services from inside the library, import the required service in anywhere of the APP and use DI**
```
import { LibOneService } from 'lib-one'
constructor(private libOneService: LibOneService){}
```
**One of the parent modules need to be provided with the service required. (providedin | providers[])**  

**You can encapsulate private services of the library avoiding circular dependency making a ServiceResolverModule:**  
All private services will be providedIn this ServiceResolverModule (to avoid CD) and will not be exposed in public-api so no import is allowed from outside.  
Public services can be defined as desired and exposed through public-api.

**Services notes:**  
If you want to consume a service not from the component but from the template, ensure that you inject the service as public in the component.  
**Al this "security" measures of Public Private, are meant for encapsulation at compile time, runtime JS should be considered as exposed.
