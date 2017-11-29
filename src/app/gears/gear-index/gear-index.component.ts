import { Component, OnInit } from '@angular/core';
import { GearsService } from '../gears.service'

@Component({
  selector: 'app-gear-index',
  templateUrl: './gear-index.component.html',
  styleUrls: ['./gear-index.component.css']
})
export class GearIndexComponent implements OnInit {

  allGears = [];
  error: any;
  searchedGear = [];

  deleteGear(deletedGear) {
    this.gearsService.deleteGear(deletedGear)
    .subscribe(response => {
      let gearIndex = this.allGears.indexOf(deletedGear);
      this.allGears.splice(gearIndex, 1);
      this.error = null
    },
    err => this.error = err);
  }

  searchGear(search) {
    console.log('search is ', search)
  }

  constructor(private gearsService : GearsService) { }

  ngOnInit() {
    this.gearsService.getAllGears()
    .subscribe(response => {
				this.allGears = response.json().gears;
        this.error = null
			},
      err => this.error = err
    );
  }

}
