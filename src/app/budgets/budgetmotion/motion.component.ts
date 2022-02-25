import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Duree } from 'src/app/models/Duree';

@Component({
  selector: 'app-motion',
  templateUrl: './motion.component.html',
  styleUrls: ['./motion.component.css']
})
export class MotionComponent implements OnInit {

  // Gestion du prix
  budget: number = 1500;
  newDurees: Duree[] = []


  constructor() {


   }

  ngOnInit(): void {
    this.generatePriceFormat();
  }


  private generatePriceFormat = () => {

    this.newDurees=[
      {id:1, name:"1 min", prix: 0, selected:false},
      {id:2, name:"2 min", prix: 500, selected:false},
      {id:3, name:"3 min", prix: 800 , selected:false}
    ]
  }

  updateBudget = (checkboxSelected : Duree ) => {
    this.budget = checkboxSelected.selected 
        ? this.budget - checkboxSelected.prix 
        : this.budget + checkboxSelected.prix;
  }
}
