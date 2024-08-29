import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';

@NgModule ({
 imports : [MatButtonModule, MatIcon, MatInputModule,MatFormFieldModule,MatCardModule],
 exports: [MatButtonModule, MatIcon, MatInputModule,MatFormFieldModule,MatCardModule]

})


export class MaterialComponent {}
