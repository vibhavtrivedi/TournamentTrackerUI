import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { WebInterceptorService } from './interceptors/web-interceptor.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavBarComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WebInterceptorService,
      multi: true
    }
  ]
})
export class AppModule { }
