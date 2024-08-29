import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { InicioComponent } from './inicio/inicio.component';
import { LibrosComponent } from './libros/libros.component';
import { RegistrarComponent } from './seguridad/registrar/registrar.component';
import { LoginComponent } from './seguridad/login/login.component';
import { SeguridadRouter } from './services/seguridad/seguridad.router';


export const routes: Routes = [
  { path: 'inicio', component: InicioComponent, canActivate :[SeguridadRouter] },
  { path: 'libros', component: LibrosComponent },
  { path: 'registrar', component: RegistrarComponent},
  { path: 'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [SeguridadRouter]
})
export class AppRoutingModule { }
