import { Books } from './../../books/books.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private booksLista: Books[] = [
    {
      libroid: 1,
      titulo: "El Alquimista",
      descripcion: "Una novela de aventuras y espiritualidad que sigue el viaje de un joven pastor andaluz en busca de su leyenda personal.",
      precio: 19.99,
      fechaPublicacion: new Date("1988-05-15"),
      autor: "Paulo Coelho"
    },
    {
      libroid: 2,
      titulo: "Cien Años de Soledad",
      descripcion: "Una de las obras más importantes de la literatura hispanoamericana que narra la historia de la familia Buendía.",
      precio: 24.99,
      fechaPublicacion: new Date("1967-06-05"),
      autor: "Gabriel García Márquez"
    },
    {
      libroid: 3,
      titulo: "Don Quijote de la Mancha",
      descripcion: "Una novela clásica que sigue las aventuras de un caballero español y su fiel escudero, Sancho Panza.",
      precio: 29.99,
      fechaPublicacion: new Date("1605-01-16"),
      autor: "Miguel de Cervantes"
    },
    {
      libroid: 4,
      titulo: "La Sombra del Viento",
      descripcion: "Un misterio literario ambientado en la Barcelona de posguerra, lleno de pasión, intriga y secretos familiares.",
      precio: 18.50,
      fechaPublicacion: new Date("2001-11-05"),
      autor: "Carlos Ruiz Zafón"
    },
    {
      libroid: 5,
      titulo: "1984",
      descripcion: "Una distopía que critica los regímenes totalitarios y la vigilancia del estado.",
      precio: 15.99,
      fechaPublicacion: new Date("1949-06-08"),
      autor: "George Orwell"
    }
  ];

  constructor() { }

  obtenerLibros () {
    return this.booksLista.slice();
  }
}
