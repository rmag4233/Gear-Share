import { Component, OnInit } from '@angular/core';
import { GearsService } from '../gears/gears.service';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchedGear = [];
  search: string;
  allGear = [];

  searchGear(search) {
    if (search === ''){
      this.searchedGear = []
    }
    for (let i = 0; i < this.allGear.length; i++) {
      if (this.allGear[i].title !== null &&
        this.allGear[i].title.toLowerCase() === this.search.toLowerCase()) {
          this.searchedGear.push(this.allGear[i])
        }
    }
  }

  constructor(private gearsService : GearsService) { }

  ngOnInit() {
      this.gearsService.getAllGears()
      .subscribe(response => {
        this.allGear = response.json().gears
      })
    }
  }
