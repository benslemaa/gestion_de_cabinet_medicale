import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { ListeComponent } from './liste/liste.component';
import { ModifierComponent } from './modifier/modifier.component';
import { SupprimerComponent } from './supprimer/supprimer.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    RendezVousComponent,
    ListeComponent,
    ModifierComponent,
    SupprimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
