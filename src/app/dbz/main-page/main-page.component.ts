import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.Personaje';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{

  personajes:Personaje[] = [];

  nuevo:Personaje={
    nombre:'',
    poder:0
  }

  agregar():void{
    if(this.nuevo.nombre.length === 0){return}
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre:"",
      poder:0
    };
  }

}
