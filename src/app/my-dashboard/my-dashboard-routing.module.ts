import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyDashboardComponent } from './my-dashboard.component';
import { MyDashboardIndexComponent } from './my-dashboard-index/my-dashboard-index.component';
import { MyDashboardLoansComponent } from './my-dashboard-loans/my-dashboard-loans.component';
import { MyDashboardLoanEditComponent } from './my-dashboard-loan-edit/my-dashboard-loan-edit.component'

const aboutRoutes: Routes = [
    {
        path: 'my-dashboard',
        component: MyDashboardComponent,
        children: [ //create the sub sections (children) for this route
            {
                path: 'my-gear',
                component: MyDashboardIndexComponent
            },
            {
                path: 'my-loans',
                component: MyDashboardLoansComponent
            },
            {
                path: 'my-loans/loan/:id',
                component: MyDashboardLoanEditComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(aboutRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class MyDashboardRoutingModule { }
