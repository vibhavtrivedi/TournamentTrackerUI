import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageServiceService {

  // private readonly tokenStatus = new BehaviorSubject<boolean>(this.hasToken());
  private readonly tokenStatus = new Subject<boolean>;
  token$ = this.tokenStatus.asObservable();

  constructor() {
   }

  setToken(token: string) {
    localStorage.setItem('token', token);
    this.tokenStatus.next(true);
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  removeToken(): void {
    localStorage.removeItem('token');
  }

  hasToken(): boolean {
    return !!this.getToken();
  }
}
