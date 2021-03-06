import { Component, OnInit } from '@angular/core';
import { GearsService } from '../../gears/gears.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-my-dashboard-index',
  templateUrl: './my-dashboard-index.component.html',
  styleUrls: ['./my-dashboard-index.component.css']
})
export class MyDashboardIndexComponent implements OnInit {

  myGears = [];
  error: any;

  deleteGear(deletedGear) {
    this.gearsService.deleteGear(deletedGear)
    .subscribe(response => {
      let gearIndex = this.myGears.indexOf(deletedGear);
      this.myGears.splice(gearIndex, 1);
      this.error = null
    },
    err => this.error = err);
  }

  constructor(private gearsService : GearsService, public auth : AuthService) { }

  ngOnInit() {
    this.gearsService.getAllGears()
    .subscribe(response => {
        let allGear = response.json().gears
        for (let i = 0; i < allGear.length; i++) {
          if (allGear[i].user_id === this.auth.user.id) {
            this.myGears.push(allGear[i])
          }
        }
        this.error = null
      },
      err => this.error = err);
    }
  }
