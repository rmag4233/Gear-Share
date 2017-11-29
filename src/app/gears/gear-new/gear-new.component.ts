import { Component, OnInit } from '@angular/core';
import { GearsService } from '../gears.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-gear-new',
  templateUrl: './gear-new.component.html',
  styleUrls: ['./gear-new.component.css']
})
export class GearNewComponent implements OnInit {

  newGear = <any>{};
  error: any;

  constructor(
    private gearsService : GearsService,
    private router : Router,
    public auth : AuthService
  ) { }

  ngOnInit() {
  }

  saveGear(newGear) {
  	this.gearsService.saveGear(this.newGear.title, this.newGear.description, this.newGear.price, this.newGear.availability, this.newGear.image_URL)
  			.subscribe(response => {
			let gear = response.json();
			this.router.navigate(["/gear/" + gear.gear.id]);
      this.error = null
		},
    err => this.error = err)
  }

}
