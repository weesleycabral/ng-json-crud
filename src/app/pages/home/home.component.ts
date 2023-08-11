import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/products.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {
  products: Products[];

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.apiService.getProducts().subscribe((value) => {
      this.products = value;
    })
  }

  deleteProduct(id: any) {
    console.log(id);
    if(confirm(`Deseja mesmo deletar o produto ${this.products[id - 1].nome}?`)) {
      this.apiService.deleteProducts(id).subscribe(() => {
        this.getProducts();
      })
    }

  }

}
