import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { FlightScheduleComponent } from './flight-schedule.component';
import { FlightAcheduleroutes } from '../routing/flightScheduleroutes';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [ 
        FlightScheduleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(FlightAcheduleroutes)
  ],
  providers: [],
  bootstrap: [FlightScheduleComponent]
})
export class FlightScheduleModule
 { }
