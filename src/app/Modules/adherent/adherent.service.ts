import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Adherent } from './adherent';

@Injectable({
  providedIn: 'root'
})
export class AdherentService {

  private apiUrl = 'http://localhost:8080/api/adherents'; // Modifiez cette URL en fonction de votre backend

  constructor(private http: HttpClient) { }

  getAllAdherents(): Observable<Adherent[]> {
    return this.http.get<Adherent[]>(this.apiUrl);
  }

  getAdherentById(adherentId: number): Observable<Adherent> {
    return this.http.get<Adherent>(`${this.apiUrl}/${adherentId}`);
  }

  addAdherent(newAdherent: Adherent): Observable<Adherent> {
    return this.http.post<Adherent>(this.apiUrl, newAdherent);
  }

  updateAdherent(adherentId: number, updatedAdherent: Adherent): Observable<Adherent> {
    return this.http.put<Adherent>(`${this.apiUrl}/${adherentId}`, updatedAdherent);
  }

  deleteAdherent(adherentId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${adherentId}`);
  }
}
