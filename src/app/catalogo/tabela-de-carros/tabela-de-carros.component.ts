import { CarroService } from './../../zservice/carro.service';
import { CarroFiltro } from './../../base/filtros';
import { Carro } from './../../base/modelo';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LazyLoadEvent, SelectItem } from 'primeng/api';
import {Location} from '@angular/common';

@Component({
  selector: 'app-tabela-de-carros',
  templateUrl: './tabela-de-carros.component.html',
  styleUrls: ['./tabela-de-carros.component.css']
})
export class TabelaDeCarrosComponent implements OnInit {
  carros: Carro[];
  carro = new Carro();
  totalRegistros = 10;
  filtro = new CarroFiltro();
  exclusao = false;
  sortOptions: SelectItem[];
  sortOrder: number;
  sortField: string;
  sortKey:any;

  constructor(private service: CarroService,
              private route: Router,
              private location: Location) { }

  ngOnInit() {
  }

  Alterar() {
    if (this.carro?.codigo != null) {
      this.route.navigate(['/listapaciente', this.carro.codigo]);
    }
  }

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
  }

  Consultar(pagina = 0): Promise<any> {
    this.filtro.pagina = pagina;
    return this.service.Consultar(this.filtro)
      .then(response => {
        this.totalRegistros = response.total;
        this.carros = response.carros.content;
      }).catch(erro => console.log(erro));
  }

  AtivarExcluir() {
    if (this.carro.codigo != null) {
      this.exclusao = true;
    }
  }

  Excluir() {
    this.service.Remover(this.carro.codigo);
    this.exclusao = false;
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first! / event.rows!;
    this.Consultar(pagina);
  }

  Voltar() {
    this.location.back();
  }

  Fechar() {
    this.route.navigate(['/home']);
  }
}
