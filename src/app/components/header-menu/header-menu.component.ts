import { Component, effect, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { SesionStore } from '../../shared/sesion-store';
import { MenuCuentaComponent } from '../menu-cuenta/menu-cuenta.component';

@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MenuCuentaComponent],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.css'
})
export class HeaderMenuComponent implements OnInit{
  store = inject(SesionStore);
  router:Router = new Router();

  usuario:any;
  isAuth: boolean = false;

  ngOnInit(): void {
    initFlowbite();
  }

  constructor(){

    this.isAuth = !!localStorage.getItem('usuario');

    if(this.isAuth){
      const data = localStorage.getItem('usuario');
      if(data) this.usuario = JSON.parse(data);
      this.store.loadUser(this.usuario);
    }
    console.log("Esta aut?:", this.isAuth);
  }

  
}


