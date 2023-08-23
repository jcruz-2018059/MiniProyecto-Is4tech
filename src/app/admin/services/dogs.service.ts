import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  private url = 'https://dog.ceo/api/breeds/image/random'

  constructor( private http: HttpClient) {}

  public getImage(): Observable<any> {
    return this.http.get<any>(this.url)
  }
   
}
