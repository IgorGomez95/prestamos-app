import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api = environment.api;

  constructor(
    private http: HttpClient,
  ) { }

  login(email: string, password: string) {
    return this.http.get<User[]>(`${this.api}users?email=${email}&password=${password}`);
  }

}

