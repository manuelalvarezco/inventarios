import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';


@NgModule({
  declarations: [FooterComponent, NavbarComponent, SidenavComponent, PageHeaderComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidenavComponent,
    PageHeaderComponent
  ]
})
export class SharedModule { }
