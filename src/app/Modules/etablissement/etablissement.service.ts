import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Etablissement } from './etablissement-interface'; 

@Injectable({
  providedIn: 'root'
})
export class EtablissementService {
  private baseUrl = 'http://127.0.0.1:8080'; 

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer tous les établissements depuis le backend
  getAllEtablissements(): Observable<Etablissement[]> {
    return this.http.get<Etablissement[]>(`${this.baseUrl}/etablissements`);
  }

  // Méthode pour récupérer un établissement par son matricule depuis le backend
  getEtablissementByMatricule(matricule: string): Observable<Etablissement> {
    return this.http.get<Etablissement>(`${this.baseUrl}/etablissements/${matricule}`);
  }

  // Méthode pour ajouter un nouvel établissement dans le backend
  addEtablissement(etablissement: Etablissement): Observable<Etablissement> {
    return this.http.post<Etablissement>(`${this.baseUrl}/etablissements`, etablissement);
  }

  // Méthode pour mettre à jour les informations d'un établissement dans le backend
  updateEtablissement(matricule: string, etablissement: Etablissement): Observable<Etablissement> {
    return this.http.put<Etablissement>(`${this.baseUrl}/etablissements/${matricule}`, etablissement);
  }

  // Méthode pour supprimer un établissement dans le backend
  deleteEtablissement(matricule: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/etablissements/${matricule}`);
  }
}
