import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GearIndexComponent } from '../gears/gear-index/gear-index.component';
import { GearsService } from '../gears/gears.service';
import { MyDashboardIndexComponent } from './my-dashboard-index/my-dashboard-index.component';
import { AuthService } from '../services/auth/auth.service';
import { MyDashboardLoansComponent } from './my-dashboard-loans/my-dashboard-loans.component';
import { MyDashboardLoanEditComponent } from './my-dashboard-loan-edit/my-dashboard-loan-edit.component'

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [MyDashboardIndexComponent, MyDashboardLoansComponent, MyDashboardLoanEditComponent],
  providers: [GearsService, GearIndexComponent, AuthService]
})
export class MyDashboardModule { }
