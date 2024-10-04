import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../utils/api.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { WebInterceptorService } from '../interceptors/web-interceptor.service';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user.service';


@NgModule({
  declarations: [UserComponent, UserListComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    ApiService, {
      provide: HTTP_INTERCEPTORS,
      useClass: WebInterceptorService,
      multi: true
    }
  ]
})
export class UserModule { }
