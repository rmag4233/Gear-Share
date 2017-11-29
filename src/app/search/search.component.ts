import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchedGear = [];
  search: any;

  searchGear(search) {
    console.log('search is ', search)
  }

  constructor() { }

  ngOnInit() {
  }

}
