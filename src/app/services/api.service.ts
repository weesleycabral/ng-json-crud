import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../models/products.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public URL = 'http://localhost:3001/products';

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<any> {
     return this.http.get<Products[]>(this.URL);
  }

  createProducts(product: Products): Observable<any> {
    return this.http.post<Products>(this.URL, product);
  }
}
