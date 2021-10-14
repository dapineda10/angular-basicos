import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.Personaje';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent{

  //Este es un componente hijo y para usar las propiedades del componente padre se usan los inputs.
  //Así le decimos que los personajes vienen del componente padre.
  @Input() personajes:Personaje[]=[]

}
