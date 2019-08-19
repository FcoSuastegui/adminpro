import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';


const routes: Routes = [
  { path: 'dashboard', component: PagesComponent, children: [
    { path: '', component: DashboardComponent, data: { titulo: 'Dashboard'} },
    { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Graficas'} },
    { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress'} },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
