import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserModel } from '../auth/user-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080'; // URL de l'API backend

  constructor(private http: HttpClient) { }

  // Méthode pour s'authentifier
  login(credentials: { email: string, password: string }): Observable<UserModel> {
    return this.http.post<UserModel>(`${this.apiUrl}/api/auth/login`, credentials).pipe( // Changement ici
      tap((user: UserModel) => {
        // Stocker l'utilisateur dans le stockage local ou la session
        localStorage.setItem('currentUser', JSON.stringify(user));
      })
    );
  }

  // Méthode pour se déconnecter
  logout(): void {
    
    localStorage.removeItem('currentUser');
  }

  // Méthode pour récupérer l'utilisateur actuellement connecté
  getCurrentUser(): UserModel {
    const userJson = localStorage.getItem('currentUser');
    return userJson ? JSON.parse(userJson) : null;
  }

  // Méthode pour vérifier si l'utilisateur est connecté
  isLoggedIn(): boolean {
    return this.getCurrentUser() !== null;
  }

  // Méthode pour obtenir le jeton d'authentification
  getAuthToken(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/auth/login`, credentials); // Changement ici
  }

  // Méthode pour enregistrer un nouvel utilisateur
  register(credentials: { nom: string, email: string, password: string, role: string }): Observable<any> { // Changement ici
    return this.http.post<any>(`${this.apiUrl}/api/auth/register`, credentials); // Changement ici
  }

  // Méthode pour obtenir le profil de l'utilisateur
  getProfile(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/profile`); // Changement ici
  }
}
