import { Component, OnInit } from '@angular/core';
import { Checkbox } from 'src/app/models/Checkbox';
import { Duree } from 'src/app/models/Duree';

@Component({
  selector: 'app-motion',
  templateUrl: './motion.component.html',
  styleUrls: ['./motion.component.css']
})
export class MotionComponent implements OnInit {

  checkboxes: Checkbox[] = [];
  budget: number = 1500;

  durees: string[] = ['1 min', '2 min', '3 min'];
  newdurees: Duree[] = []


  constructor() { }

  ngOnInit(): void {
    this.generateCheckboxFormat();
    this.generatePriceFormat();
  }

  //generateCheckbox"Format"  Format = à modifier selon la demande
  private generateCheckboxFormat = () => {
    // Genere les valeurs des inputs checkbox
    this.checkboxes=[
      {id:1, name:"1 min", prix: 0, selected:false},
      {id:2, name:"2 min", prix: 500, selected:false},
      {id:3, name:"3 min", prix: 800 , selected:false}
    ]
  }

  private generatePriceFormat = () => {

    this.newdurees=[
      {id:1, name:"1 min", prix: 0, selected:false},
      {id:2, name:"2 min", prix: 500, selected:false},
      {id:3, name:"3 min", prix: 800 , selected:false}
    ]
  }

  updateBudget = (checkboxSelected : Duree ) => {
    this.budget = checkboxSelected.selected 
        ? this.budget + checkboxSelected.prix 
        : this.budget - checkboxSelected.prix;
  }
}
