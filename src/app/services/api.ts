import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly API_URL = 'https://rickandmortyapi.com/api/character';

  // Inject HttpClient to make requests
  constructor(private http: HttpClient) { }

  // Create a method to get characters
  public getCharacters(): Observable<any> {
    return this.http.get(this.API_URL);
  }
}