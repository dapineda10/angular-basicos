import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `<h1>{{title}}</h1>
    <div>
        <h3>La  base es <strong>{{base}}</strong></h3>
        <button (click)="Acumular(base,'-')">-1</button>
        <span>{{numero}}</span>
        <button (click)="Acumular(base,'+')">+1</button>
    </div>`})

export class contadorComponent{
    title = 'Contador App';
    numero:number = 1;
    base:number = 5;
    constructor (){}
  
    Acumular(valor:number, operador:string): number{
      if (operador === '+'){
        this.numero+=valor;
      }else if(operador === '-'){
        this.numero-=valor;
      }
      return this.numero;
    }
}