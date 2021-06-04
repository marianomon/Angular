import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zapatos-list',
  templateUrl: './zapatos-list.component.html',
  styleUrls: ['./zapatos-list.component.css']
})
export class ZapatosListComponent implements OnInit {
  zapatos = {
    "nombre": "Nike",
    "tipo": "Running",
    "precio": "$12.000",
    "stock": "13",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
