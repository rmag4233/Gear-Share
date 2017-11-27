import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  moveToCreate() {
    this.router.navigate(['/gear/new'])
  }

}
