import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { MotionComponent } from './budgets/budgetmotion/motion.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PrecreationComponent } from './pages/precreation/precreation.component';
import { PreeditionComponent } from './pages/preedition/preedition.component';
import { PrefilmComponent } from './pages/prefilm/prefilm.component';
import { PreidentiteComponent } from './pages/preidentite/preidentite.component';
import { PremotionComponent } from './pages/premotion/premotion.component';
import { PrewebComponent } from './pages/preweb/preweb.component';
import { BudgetcreationComponent } from './budgets/budgetcreation/budgetcreation.component';
import { BudgeteditionComponent } from './budgets/budgetedition/budgetedition.component';
import { BudgetfilmComponent } from './budgets/budgetfilm/budgetfilm.component';
import { BudgetidentiteComponent } from './budgets/budgetidentite/budgetidentite.component';
import { BudgetwebComponent } from './budgets/budgetweb/budgetweb.component';

const routes: Routes = [
  { path: "", component: AccueilComponent },
  { path: "premotion", component: PremotionComponent },
  { path: "prefilm", component: PrefilmComponent },
  { path: "preedition", component: PreeditionComponent },
  { path: "preidentite", component: PreidentiteComponent },
  { path: "precreation", component: PrecreationComponent },
  { path: "preweb", component: PrewebComponent },
  { path: "budgetmotion", component: MotionComponent},
  { path: "budgetcreation", component: BudgetcreationComponent },
  { path: "budgetedition", component: BudgeteditionComponent },
  { path: "budgetfilm", component: BudgetfilmComponent },
  { path: "budgetidentite", component: BudgetidentiteComponent },
  { path: "budgetweb", component: BudgetwebComponent },
  { path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
