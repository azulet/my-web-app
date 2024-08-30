import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule ({
 imports : [MatDialogModule,MatSortModule,MatButtonModule, MatIcon, MatInputModule,MatFormFieldModule,MatCardModule,MatTableModule, MatPaginatorModule],
 exports: [MatDialogModule,MatSortModule,MatButtonModule, MatIcon, MatInputModule,MatFormFieldModule,MatCardModule,MatTableModule, MatPaginatorModule]

})


export class MaterialComponent {}
