
import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule, MatDatepicker} from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE,MAT_DATE_FORMATS, DateAdapter, NativeDateAdapter } from '@angular/material/core';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule, MatNativeDateModule, MatDatepickerModule, MatSelectModule, MatDialogModule, MatButtonModule, FlexLayoutModule, MatCardModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './book-new.component.html',
  providers: [ MatDatepickerModule,
    { provide: DateAdapter, useClass: NativeDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }// Provide the locale for the datepicker
  ]

})


export class BookNewComponent {
  autor = '';
  selectAutor!: string;
  @ViewChild(MatDatepicker) picker!: MatDatepicker<Date>;

  constructor() {


  }

  guardarLibro(form: NgForm) {

  }

}
