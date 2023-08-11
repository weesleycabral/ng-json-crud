import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/products.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  product: Products = {
    nome: '',
    price: null
  }


  constructor(
    private apiService: ApiService,
    private route: Router
  ) {

  }

  ngOnInit(): void {
  }


  createNewProduct() {
    this.apiService.createProducts(this.product).subscribe(() => {
      this.route.navigate(['']);
    })
  }
}
