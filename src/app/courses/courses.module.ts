import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { ListCoursesComponent } from './pages/list-courses/list-courses.component';
import { SharedModule } from '../shared/shared.module'; // Importing SharedModule


@NgModule({
  declarations: [
    ListCoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule // Importing SharedModule here
  ]
})
export class CoursesModule { }
