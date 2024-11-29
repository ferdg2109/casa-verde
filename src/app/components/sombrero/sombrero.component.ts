import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import data from '../../../../public/data/sombreros.json';
import { initFlowbite } from 'flowbite';
import { SombrerosService } from '../../pages/data-access/sombreros.services';

@Component({
  selector: 'app-sombrero',
  standalone: true,
  imports: [],
  templateUrl:'sombrero.component.html'
})
export class SombreroComponent implements OnInit {
  sombreroId:string;
  sombrerosData:any;
  sombrero:any;
  router: Router = new Router();

  url:ActivatedRoute = inject(ActivatedRoute)

  ngOnInit(): void {
    initFlowbite();
  }
  constructor(private sombrerosServices: SombrerosService){
    this.sombreroId = this.url.snapshot.params['id'];

    this.sombrerosServices.getSombrero(this.sombreroId).subscribe(data => {
      this.sombrero = data;
    });

    console.log(this.sombreroId)
    console.log(this.sombrero)
  }

  navigateTo(ruta:String){
    this.router.navigate([ruta]);
  }
}
