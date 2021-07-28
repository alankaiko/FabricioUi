import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.IniciarMenu();
  }

  private IniciarMenu() {
    this.items = [
      {
        icon: 'pi pi-fw pi-pencil',
        label: 'Cadastrar',
        routerLink: ['cadastrar-carros']
      },
      {
        icon: 'pi pi-fw pi-home',
        label: 'Listar',
        routerLink: ['comprar-carros']
      },
      {
        icon: 'pi pi-fw pi-pencil',
        label: 'Marcas',
        routerLink: ['cadastrar-marcas']
      },
      {
        icon: 'pi pi-fw pi-home',
        label: 'Modelos',
        routerLink: ['cadastrar-modelos']
      }
    ];
  }
}
