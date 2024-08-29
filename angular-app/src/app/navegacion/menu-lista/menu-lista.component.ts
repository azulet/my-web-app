import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SeguridadService } from '../../services/seguridad/seguridad.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu-lista',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, MatToolbarModule, MatListModule, FlexLayoutModule, MatIconModule, RouterLink, RouterOutlet],
  templateUrl: './menu-lista.component.html',
  styleUrl: './menu-lista.component.css'
})
export class MenuListaComponent implements OnInit, OnDestroy {

  @Output() menuToggle = new EventEmitter<void>();
  estadoUsuario: boolean = false;
  usuarioSuscription!: Subscription;
  _seguridadService!: SeguridadService;
  constructor(private seguridadService: SeguridadService) {

  }
  ngOnDestroy(): void {
    this.usuarioSuscription.unsubscribe();
  }
  ngOnInit(): void {
    this.usuarioSuscription = this.seguridadService.segurdidadCambio.subscribe(estatus => {
      this.estadoUsuario = estatus;

    })
  }

  onCerrarMenu() {
    console.log('clicked' + this.menuToggle.emit);

    this.menuToggle.emit();

  }

  terminarSesion() {
    this.onCerrarMenu();
    this.seguridadService.salirSesion();

  }


}
