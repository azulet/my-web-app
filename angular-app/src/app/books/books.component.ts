import { Component } from '@angular/core';
import { Books } from './books.model';
import { BooksService } from '../services/books/books-service.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  bookData: Books[] = [];
  desplegarColumnas = ["titulo", "descripcion", "autor", "precio"];
  dataSource = new MatTableDataSource<Books>();

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.dataSource.data = this.bookService.obtenerLibros();
  }

}
