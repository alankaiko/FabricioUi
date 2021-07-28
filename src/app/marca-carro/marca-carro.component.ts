import { Component, OnInit } from '@angular/core';
import { Marca } from '../base/modelo';

@Component({
  selector: 'app-marca-carro',
  templateUrl: './marca-carro.component.html',
  styleUrls: ['./marca-carro.component.css']
})
export class MarcaCarroComponent implements OnInit {
  marca = new Marca;

  constructor() { }

  ngOnInit(): void {
  }

}
