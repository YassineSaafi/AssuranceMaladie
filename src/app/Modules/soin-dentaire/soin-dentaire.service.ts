import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SoinDentaire } from './soin-dentaire-interface'; // Assurez-vous d'importer l'interface SoinDentaire

@Injectable({
  providedIn: 'root'
})
export class SoinDentaireService {
  private baseUrl = 'http://127.0.0.1:8080'; // URL de base du backend

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer tous les soins dentaires depuis le backend
  getAllSoinsDentaires(): Observable<SoinDentaire[]> {
    return this.http.get<SoinDentaire[]>(`${this.baseUrl}/soins-dentaires`);
  }

  // Méthode pour récupérer un soin dentaire par sa date depuis le backend
  getSoinDentaireByDate(date: Date): Observable<SoinDentaire> {
    // Formatage de la date pour l'envoyer comme paramètre
    const formattedDate = date.toISOString().slice(0, 10);
    return this.http.get<SoinDentaire>(`${this.baseUrl}/soins-dentaires?date=${formattedDate}`);
  }

  // Méthode pour ajouter un nouveau soin dentaire dans le backend
  addSoinDentaire(soinDentaire: SoinDentaire): Observable<SoinDentaire> {
    return this.http.post<SoinDentaire>(`${this.baseUrl}/soins-dentaires`, soinDentaire);
  }

  // Méthode pour mettre à jour les informations d'un soin dentaire sur le backend
  updateSoinDentaire(date: Date, soinDentaire: SoinDentaire): Observable<SoinDentaire> {
    // Formatage de la date pour l'envoyer comme paramètre
    const formattedDate = date.toISOString().slice(0, 10);
    return this.http.put<SoinDentaire>(`${this.baseUrl}/soins-dentaires?date=${formattedDate}`, soinDentaire);
  }

  // Méthode pour supprimer un soin dentaire dans le backend
  deleteSoinDentaire(date: Date): Observable<any> {
    // Formatage de la date pour l'envoyer comme paramètre
    const formattedDate = date.toISOString().slice(0, 10);
    return this.http.delete(`${this.baseUrl}/soins-dentaires?date=${formattedDate}`);
  }
}
