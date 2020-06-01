import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxSimplePrintModule } from '../../../ngx-simple-print/src/lib/ngx-simple-print.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSimplePrintModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
