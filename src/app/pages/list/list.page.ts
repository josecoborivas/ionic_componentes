import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('list') list: IonList; 

  users: Observable<any>;
  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.users = this.dataService.getUsers();
  }

  favorite(user) {
    console.log('favorite', user);
    this.list.closeSlidingItems();
  }
  share(user){
    console.log('share', user);
    this.list.closeSlidingItems();
  }
  delete(user){
    console.log('delete', user);
    this.list.closeSlidingItems();
  }

}
