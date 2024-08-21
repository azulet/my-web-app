import { Component, OnInit, OnDestroy } from '@angular/core';
import { LibroComponent } from "../libro/libro.component";
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { LibrosService } from '../services/libros-services.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [LibroComponent, CommonModule, FormsModule],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent implements OnInit, OnDestroy {
  libros: string[] = [];
  private libroSuscription!: Subscription;

  constructor(private libroService: LibrosService) {


  }



  eliminarLibro(libro: string) {


  }

  guardarLibro(f: NgForm) {
    this.libroService.agregarLibro(f.value.nombreLibro);
  }

  ngOnInit(): void {
    this.libros = this.libroService.obtenerLibros();
    this.libroSuscription = this.libroService.librosSubject.subscribe(() => {
      this.libros = this.libroService.obtenerLibros();
    });
  }

  ngOnDestroy(): void {
    this.libroSuscription.unsubscribe();
  }

}
