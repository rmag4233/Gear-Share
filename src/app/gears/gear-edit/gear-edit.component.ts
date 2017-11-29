import { Component, OnInit } from '@angular/core';
import { GearsService } from '../gears.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gear-edit',
  templateUrl: './gear-edit.component.html',
  styleUrls: ['./gear-edit.component.css']
})
export class GearEditComponent implements OnInit {

  updatedGear = <any>{};
  error: any;

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private gearsService : GearsService
  ) { }

  ngOnInit() {
    this.route.params.forEach( param => {
      this.gearsService.getOneGear(param.id)
      .subscribe(response => {
        this.updatedGear = response.json();
        this.error = null
      },
      err => this.error = err);
    });
  }


  updateGear(updatedGear) {
    this.gearsService.updateGear(this.updatedGear.title, this.updatedGear.description, this.updatedGear.price, this.updatedGear.availability, this.updatedGear.image_URL, this.updatedGear.gear.id)
    .subscribe(response => {
      let gear = response.json();
      this.router.navigate(["/gear/" + gear.gear.id]);
      this.error = null
    },
    err => this.error = err)
  }

}
