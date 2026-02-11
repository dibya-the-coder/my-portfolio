import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProjectComponent } from './pages/project/project.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AchievementsComponent } from './pages/achievements/achievements.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

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
    // {
    //     path: 'achievements',
    //     component: AchievementsComponent
    // },
    {
        path: '**',
        component: NotFoundComponent
    }
];
