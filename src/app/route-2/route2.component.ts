import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.scss'],
})
export class Route2Component implements OnInit {
  isListView: boolean = false;
  sourceProducts = [];
  products = [];
  sortOrder: number = 0;
  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    this.fetchProducts();
  }
  fetchProducts() {
    this.httpClient.get('assets/products.json').subscribe((data: any) => {
      this.sourceProducts = data;
      this.sortProducts();
    });
  }

  listView() {
    this.isListView = true;
  }
  gridView() {
    this.isListView = false;
  }

  sortProducts() {
    let productsList = [...this.sourceProducts];
    if (this.sortOrder == 1) {
      this.products = productsList.sort((a, b) => a.price - b.price);
    } else if (this.sortOrder == -1) {
      this.products = productsList.sort((a, b) => b.price - a.price);
    } else {
      this.products = this.sourceProducts;
    }
  }
}
