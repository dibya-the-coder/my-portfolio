import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDarkMode = signal<boolean>(false);

  constructor() {
    this.initTheme();
  }

  initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkMode.set(savedTheme === 'dark');
    } else {
      // Default to light theme as requested
      this.isDarkMode.set(false);
    }
    this.applyTheme();
  }

  setTheme() {
    this.isDarkMode.update(dark => !dark);
    this.applyTheme();
  }

  private applyTheme() {
    const isDark = this.isDarkMode();
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
}
