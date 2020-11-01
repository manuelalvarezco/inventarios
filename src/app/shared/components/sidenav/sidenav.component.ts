import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  menus: any[] = [
    {
      name:'Home',
      icon:'home',
      link: 'home'
    },
    {
      name:'Productos',
      icon:'fastfood',
      link: 'products'
    },
    {
      name:'Estadísticas',
      icon:'leaderboard',
      link: 'statistics'
    },
    {
      name:'Documentos',
      icon:'folder',
      link: 'documents'
    },
    {
      name:'Ajustes',
      icon:'settings',
      link: 'settings'
    },
  ];

  showFiller = false;

  constructor() { }

  ngOnInit(): void {
  }

}
