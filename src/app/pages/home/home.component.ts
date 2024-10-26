import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
  <div class="mt-3 container d-flex flex-column align-items-center gap-3">
    <img [src]="logo" alt="">
    <h1>Sombrereria Casa Verde</h1>
    <h3>Calidad y tradicion en cada producto</h3>
    <button id="button-comprar">Comprar</button>
  </div>
  `,
  styles: `
    img{
      width: 450px;
    }
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  logo = 'images/logo.png'
}
