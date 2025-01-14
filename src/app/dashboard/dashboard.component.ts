import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  isSidebarOpen = false;
  activeTab: string = '';

  constructor(private router: Router) {
    const validTabs = ['education', 'project', 'experience'];
    const currentRoute = this.router.url.replace('/', '');
    this.activeTab = validTabs.includes(currentRoute) ? currentRoute : '';
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  setTab(tab: string) {
    this.activeTab = tab;
    console.log(this.activeTab);
  }

  isActive(tab: string): boolean {
    return this.activeTab === tab;
  }
}
