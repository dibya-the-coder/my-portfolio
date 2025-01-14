import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../theme.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule,FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isDarktheme: boolean;
  
  faCoffee = faCoffee;
  faSun = faSun;
  faMoon = faMoon;

  constructor(private themeService: ThemeService) {
    this.isDarktheme = this.themeService.currentTheme();
  }

  toggleTheme() {
    this.isDarktheme = !this.isDarktheme;
    this.themeService.setTheme()
  }

  isDropdownOpen: boolean = false;
  isToggleOpen: boolean = false;

  routing = [
    { path: '/', label: 'Home' },
    { path: '/profile', label: 'Profile' },
    { path: '/project', label: 'Project' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  responsiveToggleButton() {
    this.isToggleOpen = !this.isToggleOpen;
  }
}
