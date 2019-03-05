import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular';
  MostrarButton: boolean = true;
  constructor(){

  }
  Ocultar(){
    this.MostrarButton = false;
  }
}
