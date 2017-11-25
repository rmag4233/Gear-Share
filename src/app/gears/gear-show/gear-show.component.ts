import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
import { GearsService } from '../gears.service';

@Component({
  selector: 'app-gear-show',
  templateUrl: './gear-show.component.html',
  styleUrls: ['./gear-show.component.css']
})
export class GearShowComponent implements OnInit {

	oneGear;

  constructor(
  	private route : ActivatedRoute,
  	private gearsService : GearsService
  ) { }

  ngOnInit() {
  	this.route.params.forEach( param => {
  		this.gearsService.getOneGear(param.id)
  		.subscribe(response => {
  			console.log(response.json());
  			this.oneGear = response.json();
  		});
  	});
  }

}
