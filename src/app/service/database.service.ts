import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private _http:HttpClient) { }
  public getDataBaseDetails(){
    return this._http.get("https://jsonplaceholder.typicode.com/posts/1/comments");
  }
}
