import { Injectable } from '@angular/core';
import { ApiService } from '../utils/api.service';
import { environment } from '../environments/environment';
import { UserModel } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) { }

  getUser(pageNumber: number, pageSize: number): any {
    const requestUrl = `${environment.API_URL}Person?pageNumber=${pageNumber}&pageSize=${pageSize}`;
    return this.apiService.get(requestUrl);
}


  createUser(user: UserModel): any {
    const body = {
      cellPhoneNumber: user.cellPhoneNumber,
      emailAddress: user.emailAddress,
      firstName: user.firstName,
      lastName: user.lastName
    }
    const requestUrl = environment.API_URL + 'Person';
    return this.apiService.post(requestUrl, body);
  }
}
