import { UsuarioComponent } from './usuario/usuario.component';
import { Component, EventEmitter,Output } from '@angular/core';
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
import {MatListModule} from '@angular/material/list';
import { BarraComponent } from "./navegacion/barra/barra.component";
import { MenuListaComponent } from "./navegacion/menu-lista/menu-lista.component";
import { SeguridadService } from './services/seguridad/seguridad.service';
import { SeguridadRouter } from './services/seguridad/seguridad.router';
import { BooksService } from './services/books/books-service.service';
import { BooksComponent } from './books/books.component';
import {BookNewComponent} from './books/book-new.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BookNewComponent, BooksComponent, MatListModule, MatToolbarModule, MatSidenavModule, CommonModule, FlexLayoutModule, RegistrarComponent, LoginComponent, MaterialComponent, RouterOutlet, FormsModule, LibrosComponent, LibroComponent, UsuarioComponent, InicioComponent, AppComponent, RouterLink, BarraComponent, MenuListaComponent],
  //exportAs:[MatListModule, MaterialComponent,MatToolbarModule,MatSidenavModule,CommonModule],
  providers: [LibrosService, SeguridadService, SeguridadRouter, BooksService],
  //entryComponents: [BookNewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  abrirMenu = false;
}
