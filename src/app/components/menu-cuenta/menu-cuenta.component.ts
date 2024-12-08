import { Component, inject, input, OnInit } from '@angular/core';
import { SesionStore } from '../../shared/sesion-store';
import { Router, RouterLink } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-menu-cuenta',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu-cuenta.component.html',
  styles: ``
})
export class MenuCuentaComponent implements OnInit{
  store = inject(SesionStore);

  user:any = input.required();
  router:Router = new Router();

  ngOnInit(): void {
    initFlowbite();
  }

  logOut(){
    this.store.removeUser();
    localStorage.removeItem('usuario');
    this.router.navigate(['home']);
  }
}
