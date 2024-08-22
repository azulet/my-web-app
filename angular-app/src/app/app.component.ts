import { UsuarioComponent } from './usuario/usuario.component';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LibrosComponent } from './libros/libros.component';
import { LibroComponent } from './libro/libro.component';
import { LibrosService } from './services/libros-services.service';
import { InicioComponent } from './inicio/inicio.component';
import { MaterialComponent } from './material.component';
import { RegistrarComponent } from './seguridad/registrar/registrar.component';
import { LoginComponent } from './seguridad/login/login.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatToolbarModule, MatSidenavModule, CommonModule,FlexLayoutModule,RegistrarComponent, LoginComponent, MaterialComponent, RouterOutlet, FormsModule,LibrosComponent, LibroComponent, UsuarioComponent, InicioComponent,AppComponent, RouterLink],
  providers: [LibrosService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  abrirMenu = false;
}
