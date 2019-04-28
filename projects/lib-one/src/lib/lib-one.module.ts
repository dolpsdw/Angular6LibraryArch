import { NgModule } from '@angular/core';
import { LibOneComponent } from './lib-one.component';
import {ServiceResolverModule} from './service-resolver/service-resolver.module';

@NgModule({
  declarations: [LibOneComponent],
  imports: [
    ServiceResolverModule
  ],
  exports: [LibOneComponent]
})
export class LibOneModule { }
