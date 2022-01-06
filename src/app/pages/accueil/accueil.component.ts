import { Component, OnInit } from '@angular/core';
import { Checkbox } from 'src/app/models/Checkbox';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  checkboxes: Checkbox[] = [];
  budget: string;

  constructor() { }

  ngOnInit(): void {
    this.generateCheckboxFormat();
    this.afficherPrix();
  }

  //generateCheckbox"Format"  Format = à modifier selon la demande
  private generateCheckboxFormat = () => {

    // Genere les valeurs des inputs checkbox
    this.checkboxes=[
      {id:1, name:"Format Rapide", prix: "", isselected:false},
      {id:2, name:"Format Standard", prix: "2000 €", isselected:false},
      {id:3, name:"Format Long", prix: "5000 €" , isselected:false}
    ]
  }

  public afficherPrix = () => {
    console.log("afficherPrix");
    
  }

  // Permet de savoir ce qui est selectionné
  public onChange = () => {
    console.log(this.checkboxes);
  }

  getCheckboxSelected = () => {

  }
}