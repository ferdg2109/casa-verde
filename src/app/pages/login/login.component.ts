import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UsuariosService } from '../data-access/usuarios.services';
import { SesionStore } from '../../shared/sesion-store';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  store = inject(SesionStore);
  private usuarioService = inject(UsuariosService);

  router:Router = new Router();
  
  logo ="images/logo.png"
  loginForm: FormGroup;
  sesionError: boolean = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      contraseña: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const credenciales = this.loginForm.value;

      this.usuarioService.login(credenciales)
        .subscribe(
          (response: any) => {
            console.log("login exitoso: ",response.usuario);
            this.store.loadUser(response.usuario);
            localStorage.setItem('usuario', JSON.stringify(response.usuario));
            this.router.navigate(['colecciones']);
          },
          (error: any) => {
            console.log("error al iniciar sesion: ",error);
            this.sesionError = true;
          }
        )
      console.log('Formulario enviado:', this.loginForm.value);
    } else {
      console.log('Formulario inválido');
      this.loginForm.markAllAsTouched(); 
    }
  }
  isInvalid(fieldName: string): boolean {
    const control = this.loginForm.get(fieldName);
    return !!control && control.invalid && (control.touched || control.dirty);
  }
}
