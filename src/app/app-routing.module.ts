import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { JsonService } from './app.service';
import { BliblioComponent } from './bliblio/bliblio.component';
import { DetailComponent } from './detail/detail.component';
import { AccueilComponent } from './accueil/accueil.component';

const appRoute: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full'},
  { path: 'accueil',  component: AccueilComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'bliblio', component: BliblioComponent },
  { path: '**', component: AppComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule  { }
