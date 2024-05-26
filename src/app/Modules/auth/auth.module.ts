import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './auth-guard.guard'; // Importation de AuthGuard
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ProfileComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule ,
    RouterModule
  ],
  providers: [AuthGuard] // Déclaration de AuthGuard comme fournisseur
})
export class AuthModule { }
