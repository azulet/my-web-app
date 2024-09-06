import { Injectable } from '@angular/core';
import { Autor } from './../../autores/autor.model';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {
  private autoresLista: Autor[] = [
    {
      autorId: 1,
      nombre: 'Gabriel',
      apellido: 'García Márquez',
      gradoAcademico: 'Doctor Honoris Causa'
    },
    {
      autorId: 2,
      nombre: 'Isabel',
      apellido: 'Allende',
      gradoAcademico: 'Licenciada en Periodismo'
    },
    {
      autorId: 3,
      nombre: 'Jorge',
      apellido: 'Luis Borges',
      gradoAcademico: 'Profesor de Literatura Inglesa'
    },
    {
      autorId: 4,
      nombre: 'Mario',
      apellido: 'Vargas Llosa',
      gradoAcademico: 'Doctor en Filosofía y Letras'
    },
    {
      autorId: 5,
      nombre: 'Octavio',
      apellido: 'Paz',
      gradoAcademico: 'Doctor Honoris Causa'
    }
  ];


  constructor() { }

  obtenerAutores() {
    return this.autoresLista.slice();
  }
}
