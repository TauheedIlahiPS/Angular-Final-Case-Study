import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route6Component } from './route6.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Route6Component,
  },
];
@NgModule({
  declarations: [Route6Component],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class Route6Module { }
