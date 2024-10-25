import { Component } from '@angular/core';
import * as data from './sombreros.json'

interface User {
  nombre:string;    
}

@Component({
  selector: 'app-colecciones',
  standalone: true,
  imports: [],
  template: `
    <h1>{{users.nombre}}</h1>
  `,
  styleUrl: './colecciones.component.css'
})
export class ColeccionesComponent {
  users: User = data;
}
