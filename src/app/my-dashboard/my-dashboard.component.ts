import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GearIndexComponent } from '../gears/gear-index/gear-index.component';
import { GearsService } from '../gears/gears.service';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent implements OnInit {

  constructor(private router : Router, private gearsService : GearsService, public auth : AuthService) { }

  ngOnInit() {
  }

  moveToCreate() {
    this.router.navigate(['/gear/new'])
  }

  moveToShow() {
    this.router.navigate(["my-dashboard/my-gear"])
	}

  moveToLoans() {
    this.router.navigate(["my-dashboard/my-loans"])
  }
  }
