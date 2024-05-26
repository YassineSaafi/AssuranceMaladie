import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isAuthenticated: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}


  ngOnInit(): void {
    
  }
  // Méthode pour se connecter
  login() {
    // Appelez la méthode login du service d'authentification avec les identifiants de l'utilisateur
    this.authService.login({ email: 'example@example.com', password: 'password' }).subscribe((user) => {
      this.isAuthenticated = true;
      // Redirigez l'utilisateur vers la page appropriée après la connexion
      this.router.navigate(['/dashboard']);
    });
  }

  // Méthode pour se déconnecter
  logout() {
    // Appelez la méthode logout du service d'authentification pour déconnecter l'utilisateur
    this.authService.logout();
    this.isAuthenticated = false;
    // Redirigez l'utilisateur vers la page d'accueil après la déconnexion
    this.router.navigate(['/']);
  }

}
