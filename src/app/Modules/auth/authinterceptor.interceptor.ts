import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Récupérer le token d'authentification de l'utilisateur connecté
    return this.authService.getAuthToken({ username: 'votreNomUtilisateur', password: 'votreMotDePasse' }).pipe(
      switchMap(authToken => {
        // Ajouter le token d'authentification à l'en-tête de la requête sortante, si disponible
        if (authToken) {
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${authToken}`
            }
          });
        }
        // Passer la requête modifiée au prochain intercepteur ou au gestionnaire de requêtes
        return next.handle(request);
      })
    );
  }
}
