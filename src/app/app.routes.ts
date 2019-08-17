
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: LoginComponent },
    { path: 'gradicas1', component: Graficas1Component },
    { path: 'progress', component: ProgressComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: NopagefoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutesRoutingModule {}
