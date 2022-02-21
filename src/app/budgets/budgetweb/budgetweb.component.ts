import { Component, OnInit } from '@angular/core';
import { Checkbox } from 'src/app/models/Checkbox';

@Component({
  selector: 'app-budgetweb',
  templateUrl: './budgetweb.component.html',
  styleUrls: ['./budgetweb.component.css']
})
export class BudgetwebComponent implements OnInit {

  checkboxes: Checkbox[] = [];
  budget: number = 1500;

  constructor() { }

  ngOnInit(): void {
    this.generateCheckboxFormat();
  }

  //generateCheckbox"Format"  Format = à modifier selon la demande
  private generateCheckboxFormat = () => {
    // Genere les valeurs des inputs checkbox
    this.checkboxes=[
      {id:1, name:"Format Rapide", prix: 0, selected:false},
      {id:2, name:"Format Standard", prix: 2000, selected:false},
      {id:3, name:"Format Long", prix: 5000 , selected:false}
    ]
  }

  updateBudget = (checkboxSelected : Checkbox ) => {
    this.budget = checkboxSelected.selected 
        ? this.budget + checkboxSelected.prix 
        : this.budget - checkboxSelected.prix;
  }
}
