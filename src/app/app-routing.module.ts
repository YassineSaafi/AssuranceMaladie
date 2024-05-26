import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './Modules/auth/components/login/login.component'
import {AddAdherentComponent} from './Modules/adherent/add-adherent/add-adherent.component'
import {RegisterComponent} from './Modules/auth/components/register/register.component'
import {ProfileComponent} from './Modules/auth/components/profile/profile.component'
import {BulletinSoinsComponent} from './Modules/bulletin-sions/add-bulletin-sions/add-bulletin-sions.component'
import {AuthGuard} from './Modules/auth/auth-guard.guard'
import {ConjointComponent} from './Modules/conjoint/conjoint/conjoint.component'
import {EnfantComponent} from './Modules/enfant/enfant/enfant.component'
import {EtablissementComponent} from './Modules/etablissement/add-etablissement/add-etablissement.component'
import {MedecinComponent} from './Modules/medecin/medecin/medecin.component'
import {SoinDentaireComponent} from './Modules/soin-dentaire/soin-dentaire/soin-dentaire.component'
import {HomeComponent} from './Modules/auth/components/home/home.component'
import {PreventLoginGuard} from './Modules/auth/authlogin.guard'


const routes: Routes = [
{ path: '', component: HomeComponent , canActivate: [AuthGuard]},
{ path: 'login', component: LoginComponent ,canDeactivate: [PreventLoginGuard]  },
{ path: 'register', component: RegisterComponent },
{ path: 'Adherent', component: AddAdherentComponent , canActivate: [AuthGuard]},
{ path: 'profile', component: ProfileComponent , canActivate: [AuthGuard]},
{ path: 'BulletinSions', component: BulletinSoinsComponent , canActivate: [AuthGuard] },
{ path: 'Conjoint', component: ConjointComponent , canActivate: [AuthGuard]},
{ path: 'Enfant', component: EnfantComponent , canActivate: [AuthGuard]},
{ path: 'Etablissement', component: EtablissementComponent , canActivate: [AuthGuard]},
{ path: 'Medecin', component: MedecinComponent , canActivate: [AuthGuard]},
{ path: 'Soint Dentaire', component: SoinDentaireComponent , canActivate: [AuthGuard]},
{ path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
