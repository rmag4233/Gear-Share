import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GearsService } from '../../gears/gears.service';

@Component({
  selector: 'app-my-dashboard-loan-edit',
  templateUrl: './my-dashboard-loan-edit.component.html',
  styleUrls: ['./my-dashboard-loan-edit.component.css']
})
export class MyDashboardLoanEditComponent implements OnInit {

  updatedLoan = <any>{};
  error: any;
  loan: any;

  constructor(private router : Router,
              private route : ActivatedRoute,
              private gearsService : GearsService) { }

  ngOnInit() {
    this.route.params.forEach( param => {
      this.gearsService.getOneLoan(param.id)
      .subscribe(response => {
        this.updatedLoan = response.json();
        this.error = null
      },
      err => this.error = err);
    });
  }

  updateLoan(updatedLoan) {
    this.gearsService.updateLoan(this.updatedLoan.loan.borrower.id, this.updatedLoan.loan.owner.id, this.updatedLoan.loan.gear.id, this.updatedLoan.loan_start, this.updatedLoan.loan_end, this.updatedLoan.loan.id)
    .subscribe(response => {
      this.loan = response.json();
      this.error = null
    },
  err => this.error = err)
  }

}
