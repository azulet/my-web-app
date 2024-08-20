import { Component } from '@angular/core';
import { LibroComponent } from "../libro/libro.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [LibroComponent, CommonModule],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent {
  libros = ['Libro 1', 'Libro 2', 'Libro 3'];


  eliminarLibro(libro: string) {

   this.libros = this.libros.filter(p => p! == libro);

  }

}
