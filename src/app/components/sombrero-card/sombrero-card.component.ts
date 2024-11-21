import { Component, input } from '@angular/core';
import { RouterLink,Router } from '@angular/router';

@Component({
  selector: 'app-sombrero-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sombrero-card.component.html',
  styles: ``
})
export class SombreroCardComponent {
  product = input.required<any>();

  router: Router = new Router();

  navigateToSombreros(id:String){
   this.router.navigate(['colecciones',id])
  }
}
