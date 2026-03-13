import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayerService
{
  private apiUrl = "http://localhost:3000/player";
  constructor(private http: HttpClient) {}

  getHighScores()
  {
    return this.http.get<Player[]>(this.apiUrl)
  }

}
