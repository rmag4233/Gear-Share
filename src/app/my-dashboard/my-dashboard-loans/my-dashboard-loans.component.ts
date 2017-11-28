import { Component, OnInit } from '@angular/core';
import { GearsService } from '../../gears/gears.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-my-dashboard-loans',
  templateUrl: './my-dashboard-loans.component.html',
  styleUrls: ['./my-dashboard-loans.component.css']
})
export class MyDashboardLoansComponent implements OnInit {

  myLoans = [];
  myBorrows = [];
  error: any;

  editLoan(loan) {
    console.log('this worked on this loan ', loan)
  }

  constructor(private gearsService : GearsService, public auth : AuthService) { }

  ngOnInit() {
    this.gearsService.getAllLoans()
    .subscribe(response => {
      let allLoans = response.json().loans;
      for (let i = 0; i < allLoans.length; i++) {
        if (allLoans[i].borrower.id === this.auth.user.id) {
          this.myBorrows.push(allLoans[i])
        }
        else if (allLoans[i].owner.id === this.auth.user.id) {
          this.myLoans.push(allLoans[i])
        }
      }
      this.error = null
    },
    err => this.error = err
    )
  }

}
