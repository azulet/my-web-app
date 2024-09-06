import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, viewChild } from '@angular/core';
import { Books } from './books.model';
import { BooksService } from '../services/books/books-service.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialog } from '@angular/material/dialog';
import { BookNewComponent } from './book-new.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [MatTableModule, MatSortModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatIcon, MatButtonModule, FlexLayoutModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit, AfterViewInit, OnDestroy {



  bookData: Books[] = [];
  desplegarColumnas = ["titulo", "descripcion", "autor", "precio"];
  dataSource = new MatTableDataSource<Books>();
  @ViewChild(MatSort) ordernamiento!: MatSort;
  @ViewChild(MatPaginator) paginacion!: MatPaginator;

  private bookSuscrition!: Subscription;
  constructor(private bookService: BooksService, private dialog: MatDialog) { }


  ngAfterViewInit(): void {
    this.dataSource.sort = this.ordernamiento;
    this.dataSource.paginator = this.paginacion;
  }

  hacerFiltro(event: Event) {

    const inputElement = event.target as HTMLInputElement;

    if (inputElement && inputElement.value !== null) {
      this.dataSource.filter = inputElement.value;
    }
  }

  ngOnInit(): void {
    this.dataSource.data = this.bookService.obtenerLibros();

    this.bookSuscrition = this.bookService.bookSubjet.subscribe(() => {
      this.dataSource.data = this.bookService.obtenerLibros();

    });
    //this.dataSource.data = this.bookService.obtenerLibros();
    console.log('lista' + this.dataSource.data);
  }


  ngOnDestroy(): void {
    this.bookSuscrition.unsubscribe();
  }

  abrirDialogo() {
    //this.dialog.open(BookNewComponent, { width: '350px' });
    const dialogRef = this.dialog.open(BookNewComponent, { width: '350px' });
    dialogRef.afterClosed().subscribe(() => {
      // Actualiza los datos después de que el modal se cierra
      this.dataSource.data = this.bookService.obtenerLibros();
      console.log('Datos actualizados después de cerrar el modal:', this.dataSource.data);
    });
  }



}
