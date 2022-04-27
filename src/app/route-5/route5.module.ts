import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route5Component } from './route5.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: Route5Component,
  },
];
@NgModule({
  declarations: [Route5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
})
export class Route5Module { }
