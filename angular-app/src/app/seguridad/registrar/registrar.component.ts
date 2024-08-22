import { Component } from '@angular/core';
import { MaterialComponent } from '../../material.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, NgForm} from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [MaterialComponent, FlexLayoutModule, FormsModule,CommonModule],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent {
  email ="";
  password="";
  nombre="";
  apellidos="";
  userName="";
  registrarUsuario(form: NgForm) {
    console.log(form);

  }

}
