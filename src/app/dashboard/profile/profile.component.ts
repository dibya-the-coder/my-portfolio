import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Profile } from '../../dtos/profile';
import { PersonalInfo } from '../../dtos/personalInfo';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileData: PersonalInfo = {
    name: '',
    bio: '',
    email: '',
    phone: '',
    address: '',
    profilePicture: '',
  }; // Initialize with default values

  isEditing = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadProfileData();
  }

  loadProfileData() {
    this.http.get<Profile>('/assets/profile.json').subscribe({
      next: (data: Profile) => {
        this.profileData = data.personalInfo;
        console.log('Education:', data.education);
      },
    });
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  saveProfile(): void {
    console.log('Profile saved:', this.profileData);
    this.isEditing = false;
  }

  cancelEdit(): void {
    this.loadProfileData(); // Reload original data
    this.isEditing = false;
  }
}
