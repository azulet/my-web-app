import { Usuario } from './../../seguridad/usuario.model';
import { Injectable } from '@angular/core';
import { LoginData } from '../../seguridad/registrar/login-data.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  segurdidadCambio = new Subject<boolean>();

  private usuario: Usuario = {
    nombre: '',
    apellidos: '',
    username: '',
    email: '',
    usuarioid: '',
    password: ''
  };

  constructor(private router: Router) { }

  registrarUsuario(usr: Usuario) {
    this.usuario = {
      nombre: usr.nombre,
      email: usr.email,
      apellidos: usr.apellidos,
      usuarioid: Math.round(Math.random() * 1000).toString(),
      username: usr.username,
      password: usr.password

    };

    this.segurdidadCambio.next(true);
    this.router.navigate(['/']);
  }

  login(usr: LoginData) {
    this.usuario = {
      nombre: '',
      email: usr.email,
      apellidos: '',
      usuarioid: Math.round(Math.random() * 1000).toString(),
      username: '',
      password: ''

    };
    this.segurdidadCambio.next(true);
    this.router.navigate(['/']);
  }

  salirSesion() {
    this.usuario = {
      nombre: '',
      apellidos: '',
      username: '',
      email: '',
      usuarioid: '',
      password: ''

    }

    this.segurdidadCambio.next(false);
    this.router.navigate(['/login']);
  }

  obtenerUsuario() {

    return { ...this.usuario };
  }

  onSesion() {
    return this.usuario != null;
  }

}
