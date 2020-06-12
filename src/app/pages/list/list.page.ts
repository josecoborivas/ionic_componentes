import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('list') list: IonList; 

  users: Observable<any>;
  constructor( private dataService: DataService, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.users = this.dataService.getUsers();
  }

  favorite(user) {
    //console.log('favorite', user);
    this.favoriteToast('Se guardo en sus favoritos!', 'primary');
    this.list.closeSlidingItems();
  }
  share(user){
    //console.log('share', user);
    this.favoriteToast('Compartido!', 'secondary');
    this.list.closeSlidingItems();
  }
  delete(user){
    //console.log('delete', user);
    //this.favoriteToast('Eliminado!', 'danger');
    this.presentToastWithOptions('Desea elminarlo?', 'danger', user.name);
    this.list.closeSlidingItems();
  }

  async favoriteToast(message: string, color: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      color
    });
    toast.present();
  }

  async presentToastWithOptions(message: string, color: string, header: string) {
    const toast = await this.toastCtrl.create({
      header,
      message,
      color,
      mode: 'ios',
      position: 'bottom',
      buttons: [
        {
          side: 'start',
          text: 'Eliminar',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

}
