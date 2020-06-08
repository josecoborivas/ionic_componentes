import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'aperture',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'beaker',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-on',
      name: 'Buttons and router',
      redirectTo: '/buttons'
    },
    {
      icon: 'card',
      name: 'Cards',
      redirectTo: '/card'
    },
    {
      icon: 'checkbox',
      name: 'CheckBox',
      redirectTo: '/check'
    },
    {
      icon: 'calendar',
      name: 'Date Time',
      redirectTo: '/date-time'
    },
    {
      icon: 'car',
      name: 'Fab Buttons',
      redirectTo: '/fab'
    },
    {
      icon: 'grid',
      name: 'Grid - Rows',
      redirectTo: '/grid'
    }
    
  ]

  constructor() { }

  ngOnInit() {
  }

}

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}
