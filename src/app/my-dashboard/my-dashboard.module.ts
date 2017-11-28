import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GearIndexComponent } from '../gears/gear-index/gear-index.component';
import { GearsService } from '../gears/gears.service';
import { MyDashboardIndexComponent } from './my-dashboard-index/my-dashboard-index.component';
import { AuthService } from '../services/auth/auth.service';
import { MyDashboardLoansComponent } from './my-dashboard-loans/my-dashboard-loans.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [MyDashboardIndexComponent, MyDashboardLoansComponent],
  providers: [GearsService, GearIndexComponent, AuthService]
})
export class MyDashboardModule { }
