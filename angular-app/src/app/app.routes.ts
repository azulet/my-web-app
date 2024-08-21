import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { InicioComponent } from './inicio/inicio.component';
import { LibrosComponent } from './libros/libros.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'libros', component: LibrosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
