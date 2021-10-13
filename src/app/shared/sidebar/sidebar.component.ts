import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  menuItems: any[];

  constructor( private sidebarService: SidebarService) {
    this.menuItems =sidebarService.menu;
    //console.log(this.menuItems)
    /*Muestra en consola
    submenu: Array(4)
    0: {titulo: 'Main', url: '/'}
    1: {titulo: 'Gráficas', url: 'grafica1'}
    2: {titulo: 'ProgressBar', url: 'progress'}
    3: {titulo: 'Promesas', url: 'promesas */
   }

  ngOnInit(): void {
  }

}
