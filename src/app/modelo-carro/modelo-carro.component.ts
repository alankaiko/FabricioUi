import { Modelo } from './../base/modelo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modelo-carro',
  templateUrl: './modelo-carro.component.html',
  styleUrls: ['./modelo-carro.component.css']
})
export class ModeloCarroComponent implements OnInit {
  modelo = new Modelo;

  constructor() { }

  ngOnInit(): void {
  }

}
