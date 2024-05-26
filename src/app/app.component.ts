import { Component , OnInit} from '@angular/core';
import { AuthService } from './Modules/auth/auth.service'; // Assurez-vous d'importer le service d'authentification
import { Router } from '@angular/router';
import {HomeComponent} from './Modules/auth/components/home/home.component'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isAuthenticated: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    // Vérifiez l'état d'authentification initial lorsque le composant est initialisé
    this.isAuthenticated = this.authService.isLoggedIn();
  }

  
}