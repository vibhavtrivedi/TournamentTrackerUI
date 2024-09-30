import { Injectable } from '@angular/core';
import { ApiService } from '../utils/api.service';
import { RegisterModel } from './auth.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService) { }

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
}
