import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route3Component } from './route3.component';
import { RouterModule, Routes } from '@angular/router';
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';
import { TimerLimitComponent } from './components/timer-limit/timer-limit.component';
import { TimeStampsComponent } from './components/time-stamps/time-stamps.component';
import { ClicksCountComponent } from './components/clicks-count/clicks-count.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: Route3Component,
  },
];
@NgModule({
  declarations: [
    Route3Component,
    CountdownTimerComponent,
    TimerLimitComponent,
    TimeStampsComponent,
    ClicksCountComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
})
export class Route3Module { }
