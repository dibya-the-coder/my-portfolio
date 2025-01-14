import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { RecivedMailComponent } from './recived-mail/recived-mail.component';
import { ProjectComponent } from './project/project.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'education', component: EducationComponent },
      { path: 'experience', component: ExperienceComponent },
      { path: 'project', component: ProjectComponent },
      { path: 'mail', component: RecivedMailComponent },
      { path: 'profile', component: ProfileComponent }, // Explicit path for profile
      { path: '', redirectTo: 'profile', pathMatch: 'full' }, // Default route redirects to profile
    ],
  },
];
