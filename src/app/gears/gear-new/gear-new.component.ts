import { Component, OnInit } from '@angular/core';
import { GearsService } from '../gears.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gear-new',
  templateUrl: './gear-new.component.html',
  styleUrls: ['./gear-new.component.css']
})
export class GearNewComponent implements OnInit {

  newGear = <any>{};

  constructor(
    private gearsService : GearsService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  saveGear(newGear) {
  	console.log(this.newGear.title);
  	this.gearsService.saveGear(this.newGear.title, this.newGear.description, this.newGear.price, this.newGear.availability, this.newGear.image_URL)
  			.subscribe(response => {
			console.log(response.json());
			let gear = response.json();
			this.router.navigate(["/gear/" + gear.gear.id]);
		})
  }

}
