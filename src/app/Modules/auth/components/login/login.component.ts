import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage!: string;
  isLoggedIn: boolean = false; // Variable pour suivre l'état de connexion de l'utilisateur

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.errorMessage = '';
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login({ email, password }).subscribe(
        () => {
          // Rediriger vers la page d'accueil après la connexion réussie
          this.router.navigate(['/accueil']); // Assurez-vous de définir correctement le chemin vers votre page d'accueil
          this.isLoggedIn = true; // Définir isLoggedIn à true après la connexion réussie
        },
        error => {
          this.errorMessage = 'Erreur de connexion : ' + error.message;
        }
      );
    } else {
      this.errorMessage = 'Veuillez remplir correctement tous les champs.';
    }
  }

  onLogout(): void {
    this.authService.logout();
    this.isLoggedIn = false;
  }
}
