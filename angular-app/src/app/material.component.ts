import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule ({
 imports : [MatButtonModule, MatIcon, MatInputModule,MatFormFieldModule],
 exports: [MatButtonModule, MatIcon, MatInputModule,MatFormFieldModule]

})


export class MaterialComponent {}
