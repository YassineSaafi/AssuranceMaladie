// bulletin-sions.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BulletinSions } from './bulletin-sions';

@Injectable({
  providedIn: 'root'
})
export class BulletinSionsService {
  private baseUrl = 'http://127.0.0.1:8080'; // URL de base du backend

  constructor(private http: HttpClient) { }

  getAllBulletinsSions(): Observable<BulletinSions[]> {
    return this.http.get<BulletinSions[]>(`${this.baseUrl}/bulletins-sions`);
  }

  getBulletinSionsById(id: number): Observable<BulletinSions> {
    return this.http.get<BulletinSions>(`${this.baseUrl}/bulletins-sions/${id}`);
  }

  addBulletinSions(bulletinSions: BulletinSions): Observable<BulletinSions> {
    return this.http.post<BulletinSions>(`${this.baseUrl}/bulletins-sions`, bulletinSions);
  }

  updateBulletinSions(id: number, bulletinSions: BulletinSions): Observable<BulletinSions> {
    return this.http.put<BulletinSions>(`${this.baseUrl}/bulletins-sions/${id}`, bulletinSions);
  }

  deleteBulletinSions(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/bulletins-sions/${id}`);
  }
}
