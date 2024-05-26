import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Medecin} from './medecin-interface'

@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  private baseUrl = 'http://127.0.0.1:8080'; // L'URL de base du backend

  constructor(private http: HttpClient) { }

  // Récupérer tous les médecins depuis le backend
  getMedecins(): Observable<Medecin[]> {
    return this.http.get<Medecin[]>(`${this.baseUrl}/medecins`);
  }

  // Ajouter un médecin sur le backend
  ajouterMedecin(medecin: Medecin): Observable<Medecin> {
    return this.http.post<Medecin>(`${this.baseUrl}/medecins`, medecin);
  }

  // Supprimer un médecin du backend
  supprimerMedecin(matricule: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/medecins/${matricule}`);
  }

  // Mettre à jour les données d'un médecin sur le backend
  mettreAJourMedecin(medecin: Medecin): Observable<Medecin> {
    return this.http.put<Medecin>(`${this.baseUrl}/medecins/${medecin.matricule}`, medecin);
  }
}
