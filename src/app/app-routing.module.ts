import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/Route-1', pathMatch: 'full' },
  {
    path: 'Route-1',
    loadChildren: () =>
      import('./route-1/route1.module').then((m) => m.Route1Module),
  },
  {
    path: 'Route-2',
    loadChildren: () =>
      import('./route-2/route2.module').then((m) => m.Route2Module),
  },
  {
    path: 'Route-3',
    loadChildren: () =>
      import('./route-3/route3.module').then((m) => m.Route3Module),
  },
  {
    path: 'Route-4',
    loadChildren: () =>
      import('./route-4/route4.module').then((m) => m.Route4Module),
  },
  {
    path: 'Route-5',
    loadChildren: () =>
      import('./route-5/route5.module').then((m) => m.Route5Module),
  },
  {
    path: 'Route-6',
    loadChildren: () =>
      import('./route-6/route6.module').then((m) => m.Route6Module),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
