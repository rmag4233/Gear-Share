import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GearIndexComponent } from '../gears/gear-index/gear-index.component';
import { GearsService } from '../gears/gears.service';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent implements OnInit {

  myGears = [];

  constructor(private router : Router, private gearsService : GearsService) { }

  ngOnInit() {
  }

  moveToCreate() {
    this.router.navigate(['/gear/new'])
  }

  moveToShow() {
    this.gearsService.getAllGears()
    .subscribe(response => {
				console.log(response.json().gears);
				let allGear = response.json().gears
        for (let i = 0; i < allGear.length; i++) {
          if (allGear[i].user_id === 38) {
            this.myGears.push(allGear[i])
          }
        }
        this.router.navigate(['/gear'])
			});
  }

}
