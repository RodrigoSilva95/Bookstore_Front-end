import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { book } from "./product-item/model/book";

@Injectable()

export class BooksService{
    private url = 'https://localhost:44382/api/bookstore';

    httpOptions = {
        Headers: new HttpHeaders({'content-type': 'application/json'})
    }

    constructor(private http:HttpClient){}

    getBook(){
        return this.http.get(this.url)
    }
}