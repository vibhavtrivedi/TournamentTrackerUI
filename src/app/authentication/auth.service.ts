import { Injectable } from '@angular/core';
import { ApiService } from '../utils/api.service';
import { LoginModel, RegisterModel } from './auth.model';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';
import { TokenStorageServiceService } from '../utils/token-storage-service.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private apiService: ApiService, private route:Router, private tokenService: TokenStorageServiceService) { }

  registerUser(userData: RegisterModel) {
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
      if (res != 'Invalid Credentials') {
        this.tokenService.setToken(res.token);
        this.tokenService.setName(res.user);
        this.route.navigate(['/']);
      }
    });
  }

  get token() {
    return localStorage.getItem('token');
  }
}
