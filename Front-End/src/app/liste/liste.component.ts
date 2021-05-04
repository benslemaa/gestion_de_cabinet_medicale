import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  constructor(private route : Router ) { }

  ngOnInit(): void {
  }
  goToAccueil(){
    this.route.navigate(["/Accueil"])
  }
    goTordv(){
      this.route.navigate(["/Rendez-vous"])
    }
    goToModifer(){
      this.route.navigate(["/Modifier"])
      
    }
    goToSupprimer(){
      this.route.navigate(["/Supprimer"])
    }
    afficherdv(){
   
      var numRDV= (<HTMLInputElement>document.getElementById('numRDV')).value 
      var date= (<HTMLInputElement>document.getElementById('date')).value 
      var heure= (<HTMLInputElement>document.getElementById('heure')).value 
   console.log(numRDV,date,heure);
   
  
  
    }
  }