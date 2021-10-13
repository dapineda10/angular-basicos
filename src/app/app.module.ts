import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ //Se importan los módulos creados en otros lugares para que los reconozca la app
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
