import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PreventLoginGuard implements CanDeactivate<LoginComponent> {

  constructor(private authService: AuthService) {}

  canDeactivate(component: LoginComponent): boolean {
    if (this.authService.isLoggedIn()) {
      return false; // Empêcher la désactivation de la page de connexion si l'utilisateur est déjà connecté
    }
    return true;
  }
}
