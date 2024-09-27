import { Component } from '@angular/core';
import { NavBarModel } from './nav-bar.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  navItems: NavBarModel[] = [
    {
      id: 'home',
      name: 'home',
      isActiveItem: false,
      path: '/',
      label: 'Home'
    },
    {
      id: 'user',
      name: 'user',
      isActiveItem: false,
      path: '/user',
      label: 'User'
    },
    {
      id: 'prize',
      name: 'prize',
      isActiveItem: false,
      path: '/prize',
      label: 'Prize'
    },
    {
      id: 'tournament',
      name: 'tournament',
      isActiveItem: false,
      path: '/tournament',
      label: 'Tournament'
    },
    {
      id: 'login',
      name: 'login',
      isActiveItem: false,
      path: '/login',
      label: 'Login'
    }
  ]

  navItemClick(x: any) {

  }
}
