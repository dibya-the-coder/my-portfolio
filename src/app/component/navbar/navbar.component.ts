import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../theme.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isDarktheme: boolean;

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
