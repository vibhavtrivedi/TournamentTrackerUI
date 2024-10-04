import { Injectable } from '@angular/core';
import { ApiService } from '../utils/api.service';
import { LoginModel, RegisterModel } from './auth.model';
import { environment } from '../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private loggedIn = new BehaviorSubject<Boolean>(false);

  constructor(private apiService: ApiService, private route:Router) { }

  registerUser(userData: RegisterModel) {
    console.log("u", userData);
    const body = {
      name: userData.name,
      email: userData.email,
      password: userData.password
    }
    const requestUrl = environment.API_URL + 'Auth/register';
    return this.apiService.post(requestUrl, body);
  }

  loginUser(user: LoginModel) {
    console.log('user', user);
    const body = {
      email: user.email,
      password: user.password
    }
    const requestUrl = environment.API_URL + 'Auth/login';
      const res = this.apiService.post(requestUrl, body).subscribe((res) => {
      console.log('res', res);
      if (res) {
        localStorage.setItem('token', res);
        this.loggedIn.next(true);
        this.route.navigate(['/']);
      }
    });
  }

  get token() {
    return localStorage.getItem('token');
  }
}
