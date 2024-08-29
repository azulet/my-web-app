import { Component, Output, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SeguridadService } from '../../services/seguridad/seguridad.service';
import { Subscription } from 'rxjs';
//import { EventEmitter, Output } from 'stream';



@Component({
  selector: 'app-barra',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, MatToolbarModule, MatListModule, FlexLayoutModule, MatIconModule, RouterLink, RouterOutlet],
  templateUrl: './barra.component.html',
  styleUrl: './barra.component.css'
})
export class BarraComponent implements OnInit, OnDestroy {
  @Output() menuToggle = new EventEmitter<void>();
  estadoUsuario: boolean = false;
  usuarioSuscription!: Subscription;

  constructor(private seguridadService: SeguridadService) {
  }
  ngOnDestroy() {
    this.usuarioSuscription.unsubscribe();
  }
  ngOnInit(): void {
    this.usuarioSuscription = this.seguridadService.segurdidadCambio.subscribe(estatus => {
      this.estadoUsuario = estatus;

    });
  }

  onMenuToggleDispatch() {
    console.log('clicked');
    this.menuToggle.emit();

  }

  terminarSesion() {
    this.seguridadService.salirSesion();
  }

}
