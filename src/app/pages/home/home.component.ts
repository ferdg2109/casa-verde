import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <img [src]="logo" alt="">
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
