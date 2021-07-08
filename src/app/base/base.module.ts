import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MenupesquisaComponent } from './menupesquisa/menupesquisa.component';
import { RodapeComponent } from './rodape/rodape.component';



@NgModule({
  declarations: [
    NavbarComponent,
    MenupesquisaComponent,
    RodapeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BaseModule { }
