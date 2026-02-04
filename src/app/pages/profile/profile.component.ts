import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataProvider } from '../../data/data.service';

import { CertificationCardComponent } from '../../component/certification-card/certification-card.component';
import { ProfileSectionListComponent, ListItem } from '../../component/profile-section-list/profile-section-list.component';
import { ProfileSectionTagsComponent } from '../../component/profile-section-tags/profile-section-tags.component';
import { GithubComponent } from '../../component/social-media/github/github.component';
import { LinkedinComponent } from '../../component/social-media/linkedin/linkedin.component';
import { MailComponent } from '../../component/social-media/mail/mail.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, HttpClientModule, CertificationCardComponent, ProfileSectionListComponent, ProfileSectionTagsComponent, GithubComponent, LinkedinComponent, MailComponent],
  providers: [DataProvider],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  profile: any;

  constructor(private http: HttpClient, private dataProvider: DataProvider) {}

  ngOnInit() {
    this.loadProfileData();
  }

  loadProfileData() {
    this.profile = this.dataProvider.getAllData();
  }

  // Transform experience data to ListItem format
  get experienceItems(): ListItem[] {
    if (!this.profile?.experience) return [];
    return this.profile.experience.map((exp: any) => ({
      header: exp.role,
      subHeader: `${exp.company} • ${exp.duration}`,
      description: exp.description
    }));
  }

  // Transform education data to ListItem format
  get educationItems(): ListItem[] {
    if (!this.profile?.education) return [];
    return this.profile.education.map((edu: any) => ({
      header: edu.degree,
      subHeader: edu.institution,
      description: `Year of passout: ${edu.year}`
    }));
  }

}
