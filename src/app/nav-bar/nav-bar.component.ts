import { Component, OnInit } from '@angular/core';
import { NavBarModel } from './nav-bar.model';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { TokenStorageServiceService } from '../utils/token-storage-service.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  loggedIn: boolean = false;
  name: string | undefined | null;

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
    }
  ]

  navItemsAuth: NavBarModel[] = [
    {
      id: 'login',
      name: 'login',
      isActiveItem: false,
      path: '/login',
      label: 'Login'
    },
    {
      id: 'register',
      name: 'register',
      isActiveItem: false,
      path: '/register',
      label: 'Register'
    }
  ]

  navItemClick(x: any) {

  }

  constructor(private readonly tokenService: TokenStorageServiceService, private router: Router) {}

  ngOnInit(): void {
    this.getLoggedInstatus();
    this.getLoggedInName();
  }

  getLoggedInName() {
    this.tokenService.name$.subscribe((data: string | null) => {
      this.name = data;
    })
  }

  getLoggedInstatus() {
    this.tokenService.token$.subscribe((data) => {
      this.loggedIn = data;
    })
  }

  showDropdown() {
    let dropdown = document.getElementsByClassName('dropdown');
    if (dropdown.length > 0) {
      let ele = dropdown[0] as HTMLElement;
      if (ele.style.display === 'none') {
         ele.style.display = 'block'
      } else {
        ele.style.display = 'none';
      }
    }
  }

  logout() {
    this.tokenService.removeToken();
    this.tokenService.token$.subscribe((data) => {
      this.loggedIn = data;
      if (this.loggedIn === false) {
        this.showDropdown();
      }
    })
    this.router.navigate(['/']);
  }
}
