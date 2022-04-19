import { Component, OnInit } from '@angular/core';

// Decorator começa com '@'
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit { // As classes se tornam componentes quando se utiliza o 'Decorator'.
// Os componentes geram 'tags' e essas são referenciadas a partir de outros componentes.
  constructor() { }

  ngOnInit(): void {
  }

}
