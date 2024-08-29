import { Component } from '@angular/core';
import { MaterialComponent } from '../../material.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SeguridadService } from '../../services/seguridad/seguridad.service';


@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [MaterialComponent, FlexLayoutModule, FormsModule, CommonModule],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent {
  email = "";
  password = "";
  nombre = "";
  apellidos = "";
  userName = "";
  seguridadService: SeguridadService;
  constructor(_seguridadService: SeguridadService) {
    this.seguridadService = _seguridadService;

  }
  registrarUsuario(form: NgForm) {

    this.seguridadService.registrarUsuario({
      email: form.value.email,
      password: form.value.password,
      apellidos: form.value.apellidos,
      nombre: form.value.username,
      usuarioid: '',
      username: ''
    });
  }

}
