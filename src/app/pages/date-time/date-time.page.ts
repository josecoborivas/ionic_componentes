import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  FechaNac: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  cambioFecha(date){
    console.log(date);
    console.log('Date', new Date(date.detail.value))
  }

}
