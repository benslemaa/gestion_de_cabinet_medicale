import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {
  constructor(private router : Router) { }


  ngOnInit(): void {
  }
  goToListe(){
    this.router.navigate(["/liste"])
  }
  goToAccueil(){
    this.router.navigate(["/Accueil"])
  }
  goTordv(){
    this.router.navigate(["/Rendez-vous"])
  }
  modifier(){
    
    var numRDV= (<HTMLInputElement>document.getElementById('numRDV')).value 
    var date= (<HTMLInputElement>document.getElementById('date')).value 
    var heure= (<HTMLInputElement>document.getElementById('heure')).value 
 console.log(numRDV,date,heure);
 
 
 
   }
}
