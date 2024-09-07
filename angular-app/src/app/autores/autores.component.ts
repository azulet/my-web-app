import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Autor } from './autor.model';
import { AutoresService } from '../services/autores/autores.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs/operators'; // Import the map operator


@Component({
  selector: 'app-autores',
  standalone: true,
  imports: [MatTableModule, CommonModule],
  providers: [HttpClient],
  templateUrl: './autores.component.html',
  styleUrl: './autores.component.css'
})


export class AutoresComponent {
  desplegarColumnas = ['nombre', 'apellido', 'gradoAcademico'];
  dataSource = new MatTableDataSource<Autor>();

  constructor(private auterService: AutoresService) { }

  //  ngOnInit(): void {
  //     this.auterService.obtenerAutores();
  //     this.auterService.obtenerActualListener()
  //       .subscribe((autores: Autor[]) => {
  //         this.dataSource.data = autores;
  //         console.log('autores component' + this.dataSource.data)
  //       });


  //   }

  ngOnInit(): void {
    this.auterService.obtenerAutores(); // Call this to trigger data fetch
    this.auterService.obtenerActualListener().subscribe((autores: Autor[]) => {
      console.log('Received data in component:', autores); // Log received data
      this.dataSource.data = autores; // Assign to MatTableDataSource
    });
  }



}
