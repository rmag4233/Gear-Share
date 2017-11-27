import { Component, OnInit } from '@angular/core';
import { GearsService } from '../gears.service'

@Component({
  selector: 'app-gear-index',
  templateUrl: './gear-index.component.html',
  styleUrls: ['./gear-index.component.css']
})
export class GearIndexComponent implements OnInit {

  allGears = [];

  constructor(private gearsService : GearsService) { }

  ngOnInit() {
    this.gearsService.getAllGears()
    .subscribe(response => {
				console.log(response.json());
				this.allGears = response.json()
			});
  }

}
