import { ModeloCarroComponent } from './modelo-carro/modelo-carro.component';
import { MarcaCarroComponent } from './marca-carro/marca-carro.component';
import { CadastroCarroComponent } from './cadastro-carro/cadastro-carro.component';
import { TabelaDeCarrosComponent } from './catalogo/tabela-de-carros/tabela-de-carros.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Listar de carros'
    },
    children: [
      {
        path: 'comprar-carros',
        component: TabelaDeCarrosComponent
      }
    ]
  },
  {
    path: '',
    data: {
      title: 'Cadastro'
    },
    children: [
      {
        path: 'cadastrar-carros',
        component: CadastroCarroComponent
      }
    ]
  },
  {
    path: '',
    data: {
      title: 'Cadastro'
    },
    children: [
      {
        path: 'cadastrar-modelos',
        component: ModeloCarroComponent
      }
    ]
  },
  {
    path: '',
    data: {
      title: 'Cadastro'
    },
    children: [
      {
        path: 'cadastrar-marcas',
        component: MarcaCarroComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
