import { Component } from '@angular/core';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent {
  edadUno: number = 0;
  edadDos: number = 0;
  promedio: number = 0;
  suma: number = 0;


  calcular(){
    this.suma = this.edadUno + this.edadDos
    this.promedio = (this.edadUno + this.edadDos)/2
  }

  cleanValues(){
    this.edadUno = 0
    this.edadDos = 0
    this.suma = 0
    this.promedio = 0
  }

}
