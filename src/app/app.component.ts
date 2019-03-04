import { Component } from '@angular/core';
import { Objeto } from './Models/NuevoModelo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular';
  MostrarButton: boolean = true;
  constructor(){
    this.title = Objeto.nombre;
  }
  Ocultar(){
    this.MostrarButton = false;
  }
}
