import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  nombre: string;
  usuario = {
    nombre: '',
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.usuario)
  }

  reset(){
    this.usuario.nombre = '';
    this.usuario.email = '';
    this.usuario.password = '';
  }

}
