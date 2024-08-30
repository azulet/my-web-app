
import { AfterViewInit, Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-book-new',
  standalone: true,
  imports: [MatDialogModule],
  template: `<h1 mat-dialog-title>Dialog para agregar libro </h1>
            <mat-dialog-actions>
            <button mat-button [mat-dialog-close]="true">Cerrar</button>
            </mat-dialog-actions>
           `

})


export class BookNewComponent {

}
