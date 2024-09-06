import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Autor } from './autor.model';
import { AutoresService } from '../services/autores/autores.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-autores',
  standalone: true,
  imports: [MatTableModule],
  providers: [HttpClient],
  templateUrl: './autores.component.html',
  styleUrl: './autores.component.css'
})


export class AutoresComponent {
  desplegarColumnas = ['nombre', 'apellido', 'gradoAcademico'];
  dataSource = new MatTableDataSource<Autor>();

  constructor(private auterService: AutoresService) { }

  ngOnInit(): void {
    this.auterService.obtenerAutores();
    this.auterService.obtenerActualListener()
      .subscribe((autores: Autor[]) => {
        this.dataSource.data = autores;
        console.log('autores' + this.dataSource.data)
      });
  }

}
