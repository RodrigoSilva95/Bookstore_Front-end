import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/components/book-cart/product-list/model/books.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  livro!: Book;
  constructor() { }

  ngOnInit(): void {
  }

}
