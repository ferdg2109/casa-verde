import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
  <div class=" flex flex-col gap-5 fondo py-20">
    <img class="  max-w-[900px]" [src]= fondo id="fondo" alt="">
    <img class=" max-w-[900px]" [src]= inicio id="img1" alt="">
    <button id="button-comprar" (click)="navigateTo('colecciones')">VER TODO</button>
  </div>
  `,
  styles: `
    
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  fondo = 'images/Inicio.jpg'
  inicio = 'images/inicio1.jpg'

  router: Router = new Router();

  navigateTo(ruta:String){
    this.router.navigate([ruta])
  }
}
