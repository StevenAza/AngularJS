import { Component } from '@angular/core';
@Component({
    selector: 'Card',
    templateUrl: '../TemplateComponents/Card.html'
})
export class Card{
    title:string;
    parrafo:string;
    RutaImagen: string;
    Colores: string;
    Es_Abierta: boolean;
    constructor(title:string,par:string,src:string,colores:string,EsAbierta:boolean){
        this.title = title;
        this.parrafo = par;
        this.RutaImagen = src;
        this.Colores = colores;
        this.Es_Abierta = EsAbierta;
    }
}
