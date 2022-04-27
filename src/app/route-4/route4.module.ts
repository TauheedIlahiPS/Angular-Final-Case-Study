import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route4Component } from './route4.component';
import { RouterModule, Routes } from '@angular/router';
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';
import { TimerLimitComponent } from './components/timer-limit/timer-limit.component';
import { TimeStampsComponent } from './components/time-stamps/time-stamps.component';
import { ClicksCountComponent } from './components/clicks-count/clicks-count.component';
import { FormsModule } from '@angular/forms';
import { Route4Service } from './route4.service';

const routes: Routes = [
  {
    path: '',
    component: Route4Component,
  },
];
@NgModule({
  declarations: [
    Route4Component,
    CountdownTimerComponent,
    TimerLimitComponent,
    TimeStampsComponent,
    ClicksCountComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
  providers: [Route4Service]
})
export class Route4Module { }
