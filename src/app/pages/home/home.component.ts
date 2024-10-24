import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <img [src]="logo" alt="">
    <h1>Sombrereria Casa Verde</h1>
    <h3>Calidad y tradicion en cada producto</h3>
    <button id="button-comprar">Comprar</button>
  `,
  styles: `
    img{
      width: 500px;
    }
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  logo = 'images/logo.png'
}
