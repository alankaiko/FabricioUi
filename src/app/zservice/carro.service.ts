import { Carro } from './../base/modelo';
import { CarroFiltro } from './../base/filtros';
import { environment } from './../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarroService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.apiUrl}/servidor`;
  }

  Listar(): Promise<any> {
    return this.http.get(`${this.url}`).toPromise().then(response => response);
  }

  Consultar(filtro: CarroFiltro): Promise<any> {
    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString()
      }
    });


    if (filtro.nome) {
      params = params.append('nome', filtro.nome);
    }

    return this.http.get<any>(`${this.url}?resumo`, { params })
      .toPromise()
      .then(response => {
        const pacientes = response;

        const resultado = {
          pacientes,
          total: response.totalElements
        };

        return resultado;
      });
  }

  VerificarSeNomeExiste(filtro: CarroFiltro): Promise<any> {
    let params = new HttpParams();

    if (filtro.nome) {
      params = params.append('nome', filtro.nome);
    }

    return this.http.get<any>(`${this.url}?verificarexistencia`,{ params })
      .toPromise()
      .then(response => {
        const valor = response as boolean;
        return valor;
      });
  }

  Adicionar(carro: Carro): Promise<Carro> {
    return this.http.post<Carro>(`${this.url}`, carro).toPromise();
  }

  BuscarPorId(codigo: number): Promise<Carro> {
    return this.http.get<Carro>(`${this.url}/${codigo}`)
      .toPromise()
      .then(response => {
        const carro = response as Carro;

        return carro;
      });
  }

  BuscarListaPorId(codigo: number): Promise<any> {
    return this.http.get(`${this.url}/lista/${codigo}`).toPromise().then(response => response);
  }

  Atualizar(carro: Carro): Promise<any> {
    return this.http.put(`${this.url}/${carro.codigo}`, carro)
      .toPromise()
      .then(response => {
        const carroalterado = response as Carro;

        return carroalterado;
      });
  }

  Remover(codigo: number): Promise<any> {
    return this.http.delete(`${this.url}/${codigo}`).toPromise().then(() => null);
  }

}
