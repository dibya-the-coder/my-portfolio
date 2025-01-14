import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDarkMode = false

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
    }
  }
  currentTheme(){
    return this.isDarkMode;
  }

  setTheme() {
    this.isDarkMode = !this.isDarkMode;
  }
}
