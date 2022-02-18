import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { MotionComponent } from './pages/motion/motion.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PrecreationComponent } from './pages/precreation/precreation.component';
import { PreeditionComponent } from './pages/preedition/preedition.component';
import { PrefilmComponent } from './pages/prefilm/prefilm.component';
import { PreidentiteComponent } from './pages/preidentite/preidentite.component';
import { PremotionComponent } from './pages/premotion/premotion.component';
import { PrewebComponent } from './pages/preweb/preweb.component';

const routes: Routes = [
  { path: "", component: AccueilComponent },
  { path: "premotion", component: PremotionComponent },
  { path: "prefilm", component: PrefilmComponent },
  { path: "preedition", component: PreeditionComponent },
  { path: "preidentite", component: PreidentiteComponent },
  { path: "precreation", component: PrecreationComponent },
  { path: "preweb", component: PrewebComponent },
  { path: "motion", component: MotionComponent},
  { path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
