import { Injectable } from '@angular/core';
import { Autor } from './../../autores/autor.model';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AutoresService {
  private autoresLista: Autor[] = [];
  baseUrl = environment.baseUrl;
  //private autoresSubject = new Subject<Autor[]>();
  private autoresSubject = new BehaviorSubject<Autor[]>([]); // Use BehaviorSubject to provide initial value


  constructor(private http: HttpClient) { }

  // obtenerAutores() {
  //   this.http.get<Autor[]>(this.baseUrl + 'api/LibreriaAutor')
  //     .subscribe((data) => {
  //       this.autoresLista = data;
  //       this.autoresSubject.next([...this.autoresLista]);
  //       console.log('autores' + this.autoresLista);
  //     })
  //   //return this.autoresLista.slice();
  // }

  obtenerAutores() {
    this.http.get<Autor[]>(this.baseUrl + 'api/LibreriaAutor')
      .subscribe((data) => {
        this.autoresLista = data;
        this.autoresSubject.next([...this.autoresLista]);
        console.log('Data fetched and updated:', this.autoresLista);
      });
  }

  obtenerActualListener() {
    return this.autoresSubject.asObservable();
  }


}
