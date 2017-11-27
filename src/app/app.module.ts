import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { GearsRoutingModule } from './gears/gear-routing.module';
import { MyDashboardRoutingModule } from './my-dashboard/my-dashboard-routing.module';
import { GearsModule } from './gears/gears.module';
import { MyDashboardModule } from './my-dashboard/my-dashboard.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';

import { AuthService } from './services/auth/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    GearsModule,
    GearsRoutingModule,
    MyDashboardModule,
    MyDashboardRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
