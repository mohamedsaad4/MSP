import { EventsComponent } from './events/events.component';
import { Notfound404Component } from './notfound404/notfound404.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: '**', component: Notfound404Component},
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
