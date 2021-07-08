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
        label: 'Comprar carros',
        routerLink: ['listapaciente']
      },
      {
        icon: 'pi pi-fw pi-home',
        label: 'Vender Carros',
        routerLink: ['listapaciente/novo']
      },
      {
        icon: 'pi pi-fw pi-trash',
        label: 'App I9 motors',
        routerLink: ['agenda']
      },
      {
        icon: 'pi pi-fw pi-thumbs-up',
        label: 'Sobre nós',
        routerLink: ['listatipoatendimento']
      },
      {
        icon: 'pi pi-fw pi-pencil',
        label: 'Logout'
      }
    ];
  }
}
