
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule, MatDatepicker } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE, MAT_DATE_FORMATS, DateAdapter, NativeDateAdapter, MatOption } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { BooksService } from '../services/books/books-service.service';
import { BooksComponent } from './books.component';
import { Autor } from '../autores/autor.model';
import { AutoresService } from '../services/autores/autores.service';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-book-new',
  standalone: true,
  imports: [BooksComponent, CommonModule, MatNativeDateModule, MatDatepickerModule, MatSelectModule, MatDialogModule, MatButtonModule, FlexLayoutModule, MatCardModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './book-new.component.html',
  providers: [MatDatepickerModule,
    { provide: DateAdapter, useClass: NativeDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }// Provide the locale for the datepicker
  ]

})


export class BookNewComponent implements OnInit {
  autor!: string;
  autores: Autor[] = [];
  selectAutor!: string;
  fechaPublicacion!: string;
  @ViewChild(MatDatepicker) picker!: MatDatepicker<Date>;

  constructor(private bookService: BooksService, private dialogRef: MatDialogRef<BookNewComponent>, private autoresServices: AutoresService) {


  }
  ngOnInit(): void {
    this.autores = this.autoresServices.obtenerAutores();
  }

  selected(event: MatSelectChange) {
    this.autor = (event.source.selected as MatOption).viewValue;
  }
  guardarLibro(form: NgForm) {
    console.log('guardar');
    if (form.valid) {
      this.bookService.guardarLibro({
        libroid: 1,
        titulo: form.value.titulo,
        descripcion: form.value.descripcion,
        precio: form.value.precio,
        fechaPublicacion: new Date(this.fechaPublicacion),
        autor: this.autor
      });
      this.dialogRef.close();
    }


  }


}
