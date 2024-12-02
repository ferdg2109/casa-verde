import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UsuariosService } from '../data-access/usuarios.services';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterLink,RouterLinkActive],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'] 
})
export class SignupComponent {
  usuarioService = inject(UsuariosService);
  router:Router = new Router();

  registerForm: FormGroup;
  logo = "images/logo.png";

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidoP: ['', Validators.required],
      apellidoM: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contraseña: ['', [Validators.required, Validators.minLength(6)]],
      //confirmPassword: ['', Validators.required],
      calle: ['', Validators.required],
      ciudad: ['', Validators.required],
      estado: ['', Validators.required],
      CodigoP: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]], 
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const usuario = this.registerForm.value

      console.log('Formulario de registro enviado:', usuario);
      this.usuarioService.register(usuario).subscribe( (response:any) => {
        console.log(response);
        this.router.navigate(['login']);
      })
    } else {
      console.log('Formulario inválido');
      this.registerForm.markAllAsTouched();
    }
  }

  isInvalid(fieldName: string): boolean {
    const control = this.registerForm.get(fieldName);
    return !!control && control.invalid && (control.touched || control.dirty);
  }
}
