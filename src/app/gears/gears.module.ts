import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GearIndexComponent } from './gear-index/gear-index.component';
import { GearsComponent } from './gears.component';
import { GearNewComponent } from './gear-new/gear-new.component';
import { GearEditComponent } from './gear-edit/gear-edit.component';
import { GearShowComponent } from './gear-show/gear-show.component';
import { GearsService } from './gears.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [GearIndexComponent, GearsComponent, GearNewComponent, GearEditComponent, GearShowComponent],
  providers: [GearsService]
})
export class GearsModule { }
