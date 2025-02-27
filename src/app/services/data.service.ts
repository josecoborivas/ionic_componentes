import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/intefaces';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }
  
  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOptions(){
    return this.http.get<Componente[]>('./assets/data/menu.json');
  }

  getAlbumes(){
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }

  getSuperHeroes(){
    return this.http.get('./assets/data/superheroes.json')
      .pipe(
        delay(1500)
      );
  }
}

