import { Routes } from '@angular/router';


export const routes: Routes = [

  {
    path: 'user',
    loadChildren: ()=>import('./user/user.module').then((m) => m.UserModule)
  },
  {
    path: 'prize',
    loadComponent: ()=>import('./prize/prize.component').then((m) => m.PrizeComponent)
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
