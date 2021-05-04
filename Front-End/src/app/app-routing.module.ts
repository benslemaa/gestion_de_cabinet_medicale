import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeComponent } from './liste/liste.component';
import { ModifierComponent } from './modifier/modifier.component';
import { SupprimerComponent } from './supprimer/supprimer.component';

import { RendezVousComponent } from './rendez-vous/rendez-vous.component';


const routes: Routes = [
  {path : "Accueil" , component :AccueilComponent},
  {path : "Rendez-vous" , component : RendezVousComponent},
  {path : "Modifier" , component : ModifierComponent},
  {path : "Supprimer" , component : SupprimerComponent},
  {path : "Liste" , component : ListeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }