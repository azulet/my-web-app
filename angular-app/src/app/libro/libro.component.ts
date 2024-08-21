import { Component, Input, EventEmitter, Output } from '@angular/core';
import { LibrosService } from '../services/libros-services.service';

@Component({
  selector: 'app-libro',
  standalone: true,
  imports: [],
  templateUrl: './libro.component.html',
  styleUrl: './libro.component.css'
})
export class LibroComponent {
  @Input()
  tituloLibro ="";
  @Output() libroClicked = new EventEmitter();


  constructor(private libroService : LibrosService) {


  }
  onClicked() {
    this.libroService.eliminarLibro(this.tituloLibro);

  }
}
