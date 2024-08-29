import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialComponent } from '../../material.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, NgForm } from '@angular/forms';
import { SeguridadService } from '../../services/seguridad/seguridad.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCard, MatFormFieldModule, MaterialComponent, FlexLayoutModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  seguridadService: SeguridadService;
  email = '';
  password = '';

  constructor(_seguridadService: SeguridadService) {
    this.seguridadService = _seguridadService;

  }
  loginUsuario(form: NgForm) {
    this.seguridadService.login({
      email: form.value.email,
      password: form.value.password

    });
  }

}
