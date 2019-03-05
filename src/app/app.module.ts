import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentBox } from '../app/ModeloDeComponentes/ComboBox.component';
import { InputSteven } from '../app/ModeloDeComponentes/ComboBox.component';
import { NuevoComponent } from '../app//ModeloDeComponentes/NuevoComponente.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentBox,
    InputSteven,
    NuevoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
