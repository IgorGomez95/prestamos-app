import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(

  ) {
  }

  setOnLocalStorage(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getFromLocalStorage(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }
}
