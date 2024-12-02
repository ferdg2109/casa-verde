import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.css'
})
export class HeaderMenuComponent implements OnInit{
  router:Router = new Router();

  usuario;
  isAuth: boolean = false;

  ngOnInit(): void {
    initFlowbite();
  }

  constructor(){
    this.isAuth = !!localStorage.getItem('usuario');

    if(this.isAuth){
      const data = localStorage.getItem('usuario');
      if(data) this.usuario = JSON.parse(data);
    }
    console.log("Esta aut?:", this.isAuth);
  }

  logOut(){
    localStorage.removeItem('usuario');
    this.router.navigate(['home']);
  }
}


