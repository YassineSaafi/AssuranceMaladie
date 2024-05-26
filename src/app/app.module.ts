import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Importez RouterModule
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdherentModule } from './Modules/adherent/adherent.module';
import { AuthModule } from './Modules/auth/auth.module';
import { BulletinSionsModule } from './Modules/bulletin-sions/bulletin-sions.module';
import { ConjointModule } from './Modules/conjoint/conjoint.module';
import { EnfantModule } from './Modules/enfant/enfant.module';
import { MedecinModule } from './Modules/medecin/medecin.module';
import { EtablissementModule } from './Modules/etablissement/etablissement.module';
import { HomeComponent } from './Modules/auth/components/home/home.component';
import { SoinDentaireModule } from './Modules/soin-dentaire/soin-dentaire.module';
import { AuthGuard } from './Modules/auth/auth-guard.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]), // Configurer RouterModule avec forRoot
    AdherentModule,
    AuthModule,
    BulletinSionsModule,
    ConjointModule,
    EnfantModule,
    MedecinModule,
    EtablissementModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule ,
    SoinDentaireModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
