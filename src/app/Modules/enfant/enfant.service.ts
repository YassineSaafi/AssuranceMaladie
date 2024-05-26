import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnfantInterface } from './enfant-interface'; // Assurez-vous d'importer l'interface Enfant

@Injectable({
  providedIn: 'root'
})
export class EnfantService {
  private baseUrl = 'http://127.0.0.1:8080'; // URL de base du backend

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer tous les enfants depuis le backend
  getAllEnfants(): Observable<EnfantInterface[]> {
    return this.http.get<EnfantInterface[]>(`${this.baseUrl}/enfants`);
  }

  // Méthode pour récupérer un enfant par son ID depuis le backend
  getEnfantById(id: number): Observable<EnfantInterface> {
    return this.http.get<EnfantInterface>(`${this.baseUrl}/enfants/${id}`);
  }

  // Méthode pour ajouter un nouvel enfant dans le backend
  addEnfant(enfant: EnfantInterface): Observable<EnfantInterface> {
    return this.http.post<EnfantInterface>(`${this.baseUrl}/enfants`, enfant);
  }

  // Méthode pour mettre à jour les informations d'un enfant dans le backend
  updateEnfant(id: number, enfant: EnfantInterface): Observable<EnfantInterface> {
    return this.http.put<EnfantInterface>(`${this.baseUrl}/enfants/${id}`, enfant);
  }

  // Méthode pour supprimer un enfant dans le backend
  deleteEnfant(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/enfants/${id}`);
  }
}
