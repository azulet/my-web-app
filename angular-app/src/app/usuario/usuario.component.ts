import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  usuarios = ['Diana','Noemi','David','Davo','Dariel','Dono']
  usuarioNombre = 'DianaLopez';
  visible = false;

  constructor () {
  setTimeout(() =>
  {
    this.visible = true;
  },3000);

  }
  onAgregarUsuario() {
  this.usuarios.push(this.usuarioNombre);

  }

}

