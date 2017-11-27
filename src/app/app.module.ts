import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { GearsRoutingModule } from './gears/gear-routing.module';
import { GearsModule } from './gears/gears.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from './services/auth/auth.service';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';


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
    GearsRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
