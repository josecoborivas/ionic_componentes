import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild(IonSegment, {static: true}) segment: IonSegment;

  heroes: Observable<any>;
  publisher: string;
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.segment.value = 'Todos';
    this.heroes = this.dataService.getSuperHeroes();
  }

  segmentChanged(event){
    const valorSegmento = event.detail.value;
    if(valorSegmento === 'Todos'){
      this.publisher = '';
    } else {
      this.publisher = valorSegmento;
    }
    
    console.log(valorSegmento)
  }

}
