import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {

  constructor(
    private http: HttpClient,
    private apiService: ApiService
  ) {
  }

  ngOnInit(): void {
      this.apiService.getProducts();
  }

}
