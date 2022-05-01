import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DatabaseService } from '../service/database.service';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  public database: Observable<any> | undefined;
  constructor(
    private _api:DatabaseService
  ) { }

  ngOnInit(): void {
    this.database=this._api.getDataBaseDetails()

  }

 
}
