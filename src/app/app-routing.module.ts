import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';

const routes: Routes = [
    // {
    //     path: '',
    //     component: HomeComponent
    // },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'my-dashboard',
      component: MyDashboardComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
