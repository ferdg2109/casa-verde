import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ColeccionesComponent } from './pages/colecciones/colecciones.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { SombreroComponent } from './components/sombrero/sombrero.component';
import { CuentaUsuarioComponent } from './pages/cuenta-usuario/cuenta-usuario.component';

export const routes: Routes = [
    {path:'', redirectTo: "home", pathMatch: 'full'},
    {path:'home', component: HomeComponent},
    {path:'servicios', component: ServiciosComponent },
    {path:'colecciones', component: ColeccionesComponent},
    {path:'colecciones/:id', component: SombreroComponent},
    {path:'empresa', component: EmpresaComponent},
    {path:'contactos', component: ContactosComponent},
    {path:'signup', component: SignupComponent},
    {path:'login', component: LoginComponent},
    {path:'mi-cuenta', component: CuentaUsuarioComponent}
];
