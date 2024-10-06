import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageServiceService {

  private readonly tokenStatus = new BehaviorSubject<boolean>(this.hasToken());
  private readonly nameStatus = new BehaviorSubject<string | null>(this.getName());
  token$ = this.tokenStatus.asObservable();
  name$ = this.nameStatus.asObservable();
  constructor() {}

  setToken(token: string) {
    localStorage.setItem('token', token);localStorage.setItem('token', token);
    this.tokenStatus.next(true);
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  setName(name: string) {
    localStorage.setItem('name', name);
    this.nameStatus.next(name);
  }

  getName(): string | null {
    let user;
    user = localStorage.getItem('name') ?  localStorage.getItem('name') : '';
    return user;
  }

  removeToken(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
  }


  hasToken(): boolean {
    return !!this.getToken();
  }

}
