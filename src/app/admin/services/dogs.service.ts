// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Project
import { environment } from '../enviroments/environment';

// RXJS
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  private url = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getImage(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
