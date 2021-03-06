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
  error: any;

  searchGear(search) {
    // if (search === ''){
    //   this.searchedGear = []
    // }
    // commenting out above code and adding the clearing of the array each time
    // this function is called because otherwise we see multiple results of same object
    this.searchedGear = []
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
        this.allGear = response.json().gears;
        this.error = null
      },
      err => this.error = err);
    }
  }
