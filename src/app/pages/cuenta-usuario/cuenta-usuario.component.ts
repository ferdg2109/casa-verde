import { Component, OnInit } from '@angular/core';
import { EditarCuentaComponent } from '../../components/editar-cuenta/editar-cuenta.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-cuenta-usuario',
  standalone: true,
  imports: [EditarCuentaComponent],
  templateUrl: './cuenta-usuario.component.html',
  styles: ``
})
export class CuentaUsuarioComponent implements OnInit {

  usuario:any;
  usuarioId: string= '';
  isAuth:boolean = false;

  ngOnInit(): void {
    initFlowbite();
  }

  constructor(){
    this.isAuth = !!localStorage.getItem('usuario')

    if(this.isAuth){
      const data = localStorage.getItem('usuario');
      if(data){
        this.usuario = JSON.parse(data);
        this.usuarioId = this.usuario.id;
      } 
    }
  }
}
