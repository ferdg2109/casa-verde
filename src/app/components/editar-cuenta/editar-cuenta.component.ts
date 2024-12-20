import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {estados} from '../../shared/const/estados';
import { UsuariosService } from '../../pages/data-access/usuarios.services';
import { SesionStore } from '../../shared/sesion-store';

@Component({
  selector: 'app-editar-cuenta',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './editar-cuenta.component.html',
  styles: ``
})
export class EditarCuentaComponent {
  sesionStore = inject(SesionStore);

  private usuarioService = inject(UsuariosService);
  updateForm: FormGroup;
  estados:any = estados;
  ciudades:any;
  usuarioId:string='';

  constructor(private formBuilder: FormBuilder){
    this.updateForm = this.formBuilder.group({
      nombre : [this.sesionStore.user().nombre],
      apellidoP: [this.sesionStore.user().apellidoP],
      apellidoM: [this.sesionStore.user().apellidoM],
      calle: [this.sesionStore.user().calle],
      ciudad: [this.sesionStore.user().ciudad],
      estado: [this.sesionStore.user().estado],
      CodigoP: [this.sesionStore.user().CodigoP],
    })
  }

  onSubmit(){
    const usuario = this.updateForm.value;
    const dataUsuarioFromLocalStorage = localStorage.getItem('usuario');

    if(dataUsuarioFromLocalStorage) {
      const dataUsuario = JSON.parse(dataUsuarioFromLocalStorage);
      this.usuarioId = dataUsuario.id;
    }
    console.log("Usuario: ", usuario);

    this.usuarioService.update(usuario,this.usuarioId).subscribe( (res:any) => {
      console.log(res);
    })
  }

  onEstadoChange(){
    const estadoSeleccionado = this.updateForm.get('estado')?.value;
    const result = estados.find((estado) => estado.nombre === estadoSeleccionado);
    const ciudades = result?.ciudades;
    this.ciudades = ciudades;
    console.log(ciudades)
  }
}
