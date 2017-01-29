import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { JsonService } from './app.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BliblioComponent } from './bliblio/bliblio.component';
import { DetailComponent } from './detail/detail.component';
import { AccueilComponent } from './accueil/accueil.component';

const appRoute: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil',  component: AccueilComponent }, /* changer pour AccueilComponent, après créer le doss' */
  { path: 'detail/:id', component: DetailComponent },
  { path: 'bliblio', component: BliblioComponent },
  { path: '**', component: AppComponent }
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoute)
  ],
    declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BliblioComponent,
    DetailComponent,
    AccueilComponent,
  ],
  providers: [JsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
