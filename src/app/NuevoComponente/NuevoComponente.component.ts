import {Component, OnInit, DoCheck, OnDestroy} from '@angular/core';
@Component({
selector: 'NewComponent',
templateUrl: './NuevoComponente.html'
})
export class NuevoComponent implements OnInit,DoCheck, OnDestroy{
    public Nombre: string;
    public MostrarButton: boolean = true;
    constructor(){
        this.Nombre = "StevenAza";
    }
    ngOnInit(){
        console.log("ESTE COMPONENTE AHORA ESTÁ CORRIENDO SOCIO");
    }
    ngDoCheck(){
        console.log("DoCheck","LANCÉ EL CHECK");
    }
    ngOnDestroy(){
        console.log("SE ELIMINÓ");
    }
    alerta(){
        console.log("HEY HEY HEY >:v");
    }

    Ocultar(){
        this.MostrarButton = false;
    }
}