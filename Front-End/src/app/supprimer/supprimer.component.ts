import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supprimer',
  templateUrl: './supprimer.component.html',
  styleUrls: ['./supprimer.component.css']
})
export class SupprimerComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  goToAccueil(){
    this.router.navigate(["/Accueil"])
  }
  goToListe(){
    this.router.navigate(["/Liste"])
  }
  supp(){
    var date= (<HTMLInputElement>document.getElementById('date')).value 
    var heure= (<HTMLInputElement>document.getElementById('heure')).value 
    console.log(date,heure)
   }

}
