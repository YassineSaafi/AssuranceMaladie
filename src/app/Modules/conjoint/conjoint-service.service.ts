import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conjoint } from './conjoint-interface'; // Assurez-vous d'importer l'interface Conjoint

@Injectable({
  providedIn: 'root'
})
export class ConjointService {
  private baseUrl = 'http://127.0.0.1:8080'; // URL de base du backend

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer tous les conjoints depuis le backend
  getAllConjoints(): Observable<Conjoint[]> {
    return this.http.get<Conjoint[]>(`${this.baseUrl}/conjoints`);
  }

  // Méthode pour récupérer un conjoint par son ID depuis le backend
  getConjointById(id: number): Observable<Conjoint> {
    return this.http.get<Conjoint>(`${this.baseUrl}/conjoints/${id}`);
  }

  // Méthode pour ajouter un nouveau conjoint dans le backend
  addConjoint(conjoint: Conjoint): Observable<Conjoint> {
    return this.http.post<Conjoint>(`${this.baseUrl}/conjoints`, conjoint);
  }

  // Méthode pour mettre à jour les informations d'un conjoint dans le backend
  updateConjoint(id: number, conjoint: Conjoint): Observable<Conjoint> {
    return this.http.put<Conjoint>(`${this.baseUrl}/conjoints/${id}`, conjoint);
  }

  // Méthode pour supprimer un conjoint dans le backend
  deleteConjoint(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/conjoints/${id}`);
  }
}
