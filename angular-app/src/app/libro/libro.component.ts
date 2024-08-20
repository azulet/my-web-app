import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-libro',
  standalone: true,
  imports: [],
  templateUrl: './libro.component.html',
  styleUrl: './libro.component.css'
})
export class LibroComponent {
  @Input() tituloLibro: string | undefined;
  @Output() libroClicked = new EventEmitter();


  onClicked() {
    this.libroClicked.emit();

  }
}
