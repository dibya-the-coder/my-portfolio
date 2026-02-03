import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectComponent } from './project/project.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AchievementsComponent } from './achievements/achievements.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'project',
        component: ProjectComponent
    },
    // {
    //     path: 'about',
    //     component: AboutComponent
    // },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'achievements',
        component: AchievementsComponent
    },

];
