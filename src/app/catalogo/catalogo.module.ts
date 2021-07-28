import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompraComponent } from './compra/compra.component';
import { CardCarroComponent } from './card-carro/card-carro.component';
import { TabelaDeCarrosComponent } from './tabela-de-carros/tabela-de-carros.component';



@NgModule({
  declarations: [
    CompraComponent,
    CardCarroComponent,
    TabelaDeCarrosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CatalogoModule { }
