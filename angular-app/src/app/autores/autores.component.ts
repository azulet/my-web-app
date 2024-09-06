import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Autor } from './autor.model';
import { AutoresService } from '../services/autores/autores.service';


@Component({
  selector: 'app-autores',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './autores.component.html',
  styleUrl: './autores.component.css'
})


export class AutoresComponent {
  desplegarColumnas = ['nombre', 'apellido', 'gradoAcademico'];
  dataSource = new MatTableDataSource<Autor>();

  constructor(private auterService: AutoresService) { }

  ngOnInit(): void {
    this.dataSource.data = this.auterService.obtenerAutores();
  }

}
