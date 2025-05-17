import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL = 'http://localhost:3000/user'

  constructor(private http: HttpClient) { }

  listarUser() : Observable<User[]>{
    return this.http.get<User[]>(this.apiURL);
  }

  cadastrarUser(user: User) : Observable<User>{
    return this.http.post<User>(this.apiURL, user);
  }

  buscarUser(document: string) : Observable<User>{
    return this.http.get<User>(`${this.apiURL}/${document}`);
  }

  atualizarUser(document: string, user: User) : Observable<User>{
    return this.http.patch<User>(`${this.apiURL}/${document}`, user)
  }

  deletarUser(document: string) : Observable<void>{
    return this.http.delete<void>(`${this.apiURL}/${document}`)
  }

}