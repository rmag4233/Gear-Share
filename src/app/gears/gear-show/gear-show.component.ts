import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
import { GearsService } from '../gears.service';
import { AuthService } from '../../services/auth/auth.service'

@Component({
  selector: 'app-gear-show',
  templateUrl: './gear-show.component.html',
  styleUrls: ['./gear-show.component.css']
})
export class GearShowComponent implements OnInit {

	oneGear;
  error: any;
  success: any;

  requestLoan(gear) {
    this.gearsService.requestLoan(gear.id, gear.user_id, this.auth.user.id)
    .subscribe(response => {
      this.success = response;
      this.error = null
    },
    err => this.error = err)
  }

  constructor(
  	private route : ActivatedRoute,
  	private gearsService : GearsService,
    public auth : AuthService
  ) { }

  ngOnInit() {
  	this.route.params.forEach( param => {
  		this.gearsService.getOneGear(param.id)
  		.subscribe(response => {
  			this.oneGear = response.json();
        this.error = null
  		},
      err => this.error = err);
  	});
  }

}
