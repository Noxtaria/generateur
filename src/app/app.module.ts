import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MotionComponent } from './pages/motion/motion.component';
import { PremotionComponent } from './pages/premotion/premotion.component';
import { PrefilmComponent } from './pages/prefilm/prefilm.component';
import { PreidentiteComponent } from './pages/preidentite/preidentite.component';
import { PreeditionComponent } from './pages/preedition/preedition.component';
import { PrewebComponent } from './pages/preweb/preweb.component';
import { PrecreationComponent } from './pages/precreation/precreation.component';

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
    PrecreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
