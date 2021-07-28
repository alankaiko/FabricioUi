import { Carro } from './../../base/modelo';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-carro',
  templateUrl: './card-carro.component.html',
  styleUrls: ['./card-carro.component.css']
})
export class CardCarroComponent implements OnInit {
  @Input() carro: Carro;

  constructor() { }

  ngOnInit(): void {
  }

}
