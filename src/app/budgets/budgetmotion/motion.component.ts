import { Component, OnInit } from '@angular/core';
import { BTGraphique } from 'src/app/models/BTGraphique';
import { Duree } from 'src/app/models/Duree';
import { Script } from 'src/app/models/Script';
import { Animation } from 'src/app/models/Animation';
import { Illustration } from 'src/app/models/Illustration';
import { Diffusion } from 'src/app/models/Diffusion';
import { Musical } from 'src/app/models/Musical';
import { PAD } from 'src/app/models/PAD';
import { Voix } from 'src/app/models/Voix';
import { Typographie } from 'src/app/models/Typographie';
import { SousTitrage } from 'src/app/models/Titrage';

@Component({
  selector: 'app-motion',
  templateUrl: './motion.component.html',
  styleUrls: ['./motion.component.css']
})
export class MotionComponent implements OnInit {

  // Gestion du prix
  budget: number = 1500;
  prixDurees: Duree[] = [];
  prixBTGraphiques: BTGraphique[] = [];
  prixScripts: Script[] = [];
  prixAnimations: Animation[] = [];
  prixTypographies: Typographie[] = [];
  prixVoix: Voix[] = [];
  prixTitrages: SousTitrage[] = [];
  prixMusicals: Musical[] = [];
  prixIllustrations: Illustration[] = [];
  prixDiffusions: Diffusion[] = [];
  prixPADs: PAD[] = [];


  constructor() {


   }

  ngOnInit(): void {
    this.generatePriceDuree();
    this.generatePriceBTGraphique();
    this.generatePriceScript();
    this.generatePriceAnimation();
    this.generatePriceTypographie();
    this.generatePriceVoix();
    this.generatePriceTitrage();
    this.generatePriceMusical();
    this.generatePriceIllustration();
    this.generatePriceDiffusion();
    this.generatePricePAD();
  }


  private generatePriceDuree = () => {

    this.prixDurees=[
      {id:1, name:"1 min", prix: 0, selected:false},
      {id:2, name:"2 min", prix: 500, selected:false},
      {id:3, name:"3 min", prix: 800 , selected:false}
    ]
  }

  private generatePriceBTGraphique = () => {

    this.prixBTGraphiques=[
      {id:1, name:"Oui", prix: 0, selected:false},
      {id:2, name:"Non", prix: 1500, selected:false}
    ]
  }

  private generatePriceScript = () => {

    this.prixScripts=[
      {id:1, name:"Oui", prix: 500, selected:false},
      {id:2, name:"Oui, mais à retravailler", prix: 250, selected:false},
      {id:3, name:"Non", prix: 0, selected:false}
    ]
  }

  private generatePriceAnimation = () => {

    this.prixAnimations=[
      {id:1, name:"Oui", prix: 1200, selected:false},
      {id:2, name:"Non", prix: 0, selected:false},
    ]
  }

  private generatePriceTypographie = () => {

    this.prixTypographies=[
      {id:1, name:"Oui", prix: 300, selected:false},
      {id:2, name:"Non", prix: 0, selected:false},
    ]
  }

  private generatePriceVoix = () => {

    this.prixVoix=[
      {id:1, name:"Oui", prix: 500, selected:false},
      {id:2, name:"Non", prix: 0, selected:false},
    ]
  }

  private generatePriceTitrage = () => {

    this.prixTitrages=[
      {id:1, name:"Oui", prix: 150, selected:false},
      {id:2, name:"Non", prix: 0, selected:false},
    ]
  }

  private generatePriceMusical = () => {

    this.prixMusicals=[
      {id:1, name:"Libre de droit", prix: 150, selected:false},
      {id:2, name:"Création", prix: 400, selected:false},
      {id:3, name:"Non", prix: 0, selected:false},
    ]
  }

  private generatePriceIllustration = () => {

    this.prixIllustrations=[
      {id:1, name:"Oui", prix: 300, selected:false},
      {id:2, name:"Non", prix: 0, selected:false},
    ]
  }

  private generatePriceDiffusion = () => {

    this.prixDiffusions=[
      {id:1, name:"Réseaux sociaux", prix: 0, selected:false},
      {id:2, name:"Communication interne", prix: 0, selected:false},
      {id:3, name:"Grand format (4K)", prix: 0, selected:false},
    ]
  }

  private generatePricePAD = () => {

    this.prixPADs=[
      {id:1, name:"Urgent : +/- 15 jours", prix: 500, selected:false},
      {id:2, name:"Dans 1 mois", prix: 0, selected:false},
      {id:3, name:"+ d'1 mois", prix: 0, selected:false},
    ]
  }

  updateBudget = (checkboxSelected : Duree ) => {
    this.budget = checkboxSelected.selected 
        ? this.budget - checkboxSelected.prix 
        : this.budget + checkboxSelected.prix;
  }
}
