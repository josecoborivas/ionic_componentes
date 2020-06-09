import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  lista: Observable<any>;
  textoBuscar = '';
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.lista = this.dataService.getAlbumes();
  }

  buscar(event){
    this.textoBuscar = event.detail.value;
  }

}
