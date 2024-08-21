import { UsuarioComponent } from './usuario/usuario.component';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LibrosComponent } from './libros/libros.component';
import { LibroComponent } from './libro/libro.component';
import { LibrosService } from './services/libros-services.service';
import { InicioComponent } from './inicio/inicio.component';
import {AppRoutingModule } from './app.routes';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule,LibrosComponent, LibroComponent, UsuarioComponent, InicioComponent,AppRoutingModule],
  providers: [LibrosService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app';
}
