import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { }
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/'
      },
      // {

      //   label: 'Cursos',
      //   icon: 'pi pi-fw pi-pencil',
      //   // items: [
      //   //   {
      //   //     label: 'Left',
      //   //     icon: 'pi pi-fw pi-align-left'
      //   //   },
      //   //   {
      //   //     label: 'Right',
      //   //     icon: 'pi pi-fw pi-align-right'
      //   //   },
      //   //   {
      //   //     label: 'Center',
      //   //     icon: 'pi pi-fw pi-align-center'
      //   //   },
      //   //   {
      //   //     label: 'Justify',
      //   //     icon: 'pi pi-fw pi-align-justify'
      //   //   },

      //   // ]
      // },
      {
        label: 'Usuarios',
        icon: 'pi pi-fw pi-user',
        items: [
          {

            label: 'New',
            icon: 'pi pi-fw pi-user-plus',
            routerLink: '/add-user'

          },

          {
            label: 'Search',
            icon: 'pi pi-fw pi-users',
            routerLink: '/user'
          }
        ]
      },

      {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off'
      }
    ];
  }
}


