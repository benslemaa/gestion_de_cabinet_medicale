import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezVousComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  goToAccueil(){
    this.router.navigate(["/Accueil"])
  }
  goToListe(){
    this.router.navigate(["/Liste"])
  }
  goToModifer(){
    this.router.navigate(["/Modifier"])
  }
  goTordv(){
    this.router.navigate(["/Rendez-vous"])
  }
  ajouter(){
   
    var numRDV= (<HTMLInputElement>document.getElementById('numRDV')).value 
    var date= (<HTMLInputElement>document.getElementById('date')).value 
    var heure= (<HTMLInputElement>document.getElementById('heure')).value 
 console.log(numRDV,date,heure);
 


  }
}