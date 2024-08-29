import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';

@NgModule ({
 imports : [MatButtonModule, MatIcon, MatInputModule,MatFormFieldModule,MatCardModule,MatTableModule],
 exports: [MatButtonModule, MatIcon, MatInputModule,MatFormFieldModule,MatCardModule,MatTableModule]

})


export class MaterialComponent {}
