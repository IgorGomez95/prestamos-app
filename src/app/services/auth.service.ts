import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  USER_KEY = 'user';
  redirectUrl = '';

  constructor(
    private localStorage: LocalStorageService,
  ) { }

  isLoggedIn(): boolean {
    return !!this.localStorage.getFromLocalStorage(this.USER_KEY);
  }

  logout(): void {
    this.localStorage.setOnLocalStorage(this.USER_KEY, null);
  }
}
