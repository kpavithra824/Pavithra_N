import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Search } from './search.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  GetFlightDetails()
  {
    this.http.get("https://localhost:44305/api/1.0/flight/search?fromplace="+this.SearchModel.fromplace).subscribe(res => this.GetFromServer(res), res => console.log(res));
  }
  GetFromServer(res: any) {
    console.log(res);
    this.SearchModel = res;
 }
SearchModel:Search=new Search();
  SearchModels:Array<Search> = new Array<Search>();



}
