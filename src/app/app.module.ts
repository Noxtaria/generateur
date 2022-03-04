import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MotionComponent } from './budgets/budgetmotion/motion.component';
import { PremotionComponent } from './pages/premotion/premotion.component';
import { PrefilmComponent } from './pages/prefilm/prefilm.component';
import { PreidentiteComponent } from './pages/preidentite/preidentite.component';
import { PreeditionComponent } from './pages/preedition/preedition.component';
import { PrewebComponent } from './pages/preweb/preweb.component';
import { PrecreationComponent } from './pages/precreation/precreation.component';
import { BudgeteditionComponent } from './budgets/budgetedition/budgetedition.component';
import { BudgetfilmComponent } from './budgets/budgetfilm/budgetfilm.component';
import { BudgetcreationComponent } from './budgets/budgetcreation/budgetcreation.component';
import { BudgetidentiteComponent } from './budgets/budgetidentite/budgetidentite.component';
import { BudgetwebComponent } from './budgets/budgetweb/budgetweb.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import {MatStepperModule} from '@angular/material/stepper';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    NotFoundComponent,
    MotionComponent,
    PremotionComponent,
    PrefilmComponent,
    PreidentiteComponent,
    PreeditionComponent,
    PrewebComponent,
    PrecreationComponent,
    BudgetcreationComponent,
    BudgeteditionComponent,
    BudgetfilmComponent,
    BudgetidentiteComponent,
    BudgetwebComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NoopAnimationsModule,
    MatRadioModule,
    BrowserAnimationsModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
