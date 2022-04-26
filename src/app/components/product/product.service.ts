import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Observable } from 'rxjs';

@Injectable({ // Significa q essa classe pode ser injetada em outras classes.
  providedIn: 'root' // Ser provido a partir do 'root' significa q o Service é um Singleton
})
export class ProductService {

  baseUrl = 'http://localhost:3001/products'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  // Será responsável por inserir no backend um novo produto.
  create(product: Product): Observable<Product> { 
    return this.http.post<Product>(this.baseUrl, product) // Está retornando um Observable.
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }
}

/* 
  O Service serve para separar as responsabilidades 
    para que os Componentes se foquem na parte visual 
    enquanto os Services façam a lógica.

  Singleton é uma classe que tem apenas uma única instância.
    Em qualquer componente em que você queira injetar o Service ele vai devolver sempre a mesma instância.
    O valor será compartilhado sempre que usar esse Service.

  O padrão Observer é baseado em evento, 
    quando acontecer um evento então q um determinado código será chamado de forma reativa.
  
  Observables retornam algo que você consegue detectar quando a resposta acontece.

  O evento é quando a requisição, ou resposta, retornar.
*/