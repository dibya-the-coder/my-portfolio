import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { RecivedMailComponent } from './recived-mail/recived-mail.component';
import { ProjectComponent } from './project/project.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProfileComponent } from './profile/profile.component';
import { SidebarComponent } from '../component/sidebar/sidebar.component';  // Sidebar for navigation
import { routes } from './dashboard.routes';  // Import the routing
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DashboardComponent,
    RecivedMailComponent,
    ProjectComponent,
    EducationComponent,
    ExperienceComponent,
    ProfileComponent,
    SidebarComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ]
})
export class DashboardModule {}
