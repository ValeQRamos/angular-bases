import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';
import { HeroeModules } from './heroes/heroes.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CounterModule, HeroeModules],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
