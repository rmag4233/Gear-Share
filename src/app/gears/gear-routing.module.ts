import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GearsComponent } from './gears.component';
import { GearIndexComponent } from './gear-index/gear-index.component';
import { GearNewComponent } from './gear-new/gear-new.component';
import { GearEditComponent } from './gear-edit/gear-edit.component';
import { GearShowComponent } from './gear-show/gear-show.component';


const aboutRoutes: Routes = [
    {
        path: 'gear',
        component: GearsComponent,
        children: [ //create the sub sections (children) for this route
            {
                path: '',
                component: GearIndexComponent
            },
            {
                path: 'new',
                component: GearNewComponent
            },
            {
                path: 'edit/:id',
                component: GearEditComponent
            },
            {
                path: ':id',
                component: GearShowComponent
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
export class GearsRoutingModule { }
