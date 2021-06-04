import { Component, OnInit } from '@angular/core';
import {Zapato} from './Zapato';

@Component({
  selector: 'app-zapatos-list',
  templateUrl: './zapatos-list.component.html',
  styleUrls: ['./zapatos-list.component.css']
})
export class ZapatosListComponent implements OnInit {
  zapatos: Zapato[] = [
    {
    name: "Nike",
    type: "Running",
    price: 12000,
    stock: 13,
    image: "assets/img/nike_running.jpg",
    clearance: false
  },
  {
    name: "Salomon",
    type: "Trekking",
    price: 8500,
    stock: 32,
    image: "assets/img/salomon_trekking.jpg",
    clearance: false
  },
  {
    name: "Adidas",
    type: "Street",
    price: 14350,
    stock: 0,
    image: "assets/img/adidas_street.jpg",
    clearance: true
  },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
