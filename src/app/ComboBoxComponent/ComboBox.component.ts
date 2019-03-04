import { Component, OnInit } from '@angular/core';
import { Cuaderno } from '../Clases/Cuaderno';
@Component({
selector: 'Combo',
templateUrl: './ComboBoxComponent.html'
})
export class ComponentBox{

}

@Component({
    selector :'InputS',
    templateUrl :'./InputSteven.html'
})
export class InputSteven implements OnInit{
    public nombre:string;
    public apellido:string;
    public cuaderno: Array<Cuaderno>
    public Marca = new Array();
    constructor(){
        this.nombre = "Steven";
        this.apellido = "Aza";

        this.cuaderno = [
            new Cuaderno("Norma",3500,"verde"),
            new Cuaderno("Jean book",7000,"azul"),
            new Cuaderno("PappeMatte",7000,"azul")
        ]
        console.log(this.cuaderno);
    }
    CrearMarcas(){
        this.cuaderno.forEach((value, index)=>{
            console.log("ESTE ES EL FOREACH", value.marca);
            this.Marca.push(value.marca);
            console.log(this.Marca);
        });
    }
    ngOnInit(){
        this.CrearMarcas();
        console.log(this.cuaderno);
    }
}