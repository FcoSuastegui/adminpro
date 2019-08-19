import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AccountSettingsComponent } from '../shared/account-settings/account-settings.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    BreadcrumbsComponent,
    HeaderComponent,
    NopagefoundComponent,
    SidebarComponent,
    AccountSettingsComponent,

  ],
  exports: [
    CommonModule,
    BreadcrumbsComponent,
    HeaderComponent,
    NopagefoundComponent,
    AccountSettingsComponent,
    SidebarComponent,
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class SharedModule { }
