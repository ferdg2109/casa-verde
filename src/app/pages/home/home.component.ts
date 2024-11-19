import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <body> 
    <div class="mt-3 container d-flex flex-column align-items-center gap-3 fondo">
    <br>
    <img [src]= fondo id="fondo" alt="">
    <img [src]= inicio id="img1" alt="">
    <button id="button-comprar" (click)="navigateTo('colecciones')">VER TODO</button>
  </div>
</body>
  `,
  styles: `
    img{
      width: 450px;
    }
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
