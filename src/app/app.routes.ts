import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { authGuard } from './auth.guard';


export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
    canActivate: [authGuard]
  },
  {
    path: 'prize',
    loadComponent: ()=>import('./prize/prize.component').then((m) => m.PrizeComponent),
    canActivate: [authGuard]
  },
  {
    path: 'video',
    loadComponent: ()=>import('./video-streaming/video-streaming.component').then((m) => m.VideoStreamingComponent),
    canActivate: [authGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./authentication/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'login',
    loadComponent: () => import('./authentication/login/login.component').then((m) => m.LoginComponent)
  }
];
