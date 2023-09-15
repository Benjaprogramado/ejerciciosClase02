import { ArrayType } from '@angular/compiler';
import { Component } from '@angular/core';
import { Usuario } from 'src/app/classes/usuario';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: Usuario = new Usuario;

  setStaticUsers(){
    localStorage.setItem('nombre', 'Benjamin')
    localStorage.setItem('clave', '1234')
  }

  getUser(){

    this.user.nombre = localStorage.getItem('nombre');
    this.user.clave = localStorage.getItem('clave');

  }

}
