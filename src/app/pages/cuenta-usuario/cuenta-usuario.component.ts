import { Component } from '@angular/core';

@Component({
  selector: 'app-cuenta-usuario',
  standalone: true,
  imports: [],
  templateUrl: './cuenta-usuario.component.html',
  styles: ``
})
export class CuentaUsuarioComponent {

  usuario:any;
  isAuth:boolean = false;

  constructor(){
    this.isAuth = !!localStorage.getItem('usuario')

    if(this.isAuth){
      const data = localStorage.getItem('usuario');
      if(data) this.usuario = JSON.parse(data);
    }
  }
}
