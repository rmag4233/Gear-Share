import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyDashboardComponent } from './my-dashboard.component';
import { MyDashboardIndexComponent } from './my-dashboard-index/my-dashboard-index.component';


const aboutRoutes: Routes = [
    {
        path: 'my-dashboard',
        component: MyDashboardComponent,
        children: [ //create the sub sections (children) for this route
            {
                path: 'my-gear',
                component: MyDashboardIndexComponent
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
