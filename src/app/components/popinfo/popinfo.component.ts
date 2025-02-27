import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {

  lista = Array(40);
  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {}

  onClick(valor: number){
    console.log('Hijo, Item: ', valor)
    this.popoverCtrl.dismiss({
      item: valor
    })
  }

}
