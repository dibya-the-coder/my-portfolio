import { Component } from '@angular/core';
import { Experience } from '../../dtos/experience';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../../dtos/profile';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experienceDetails: Experience[]= [];
    constructor(private http: HttpClient) { }
    ngOnInit(){
      this.loadProfileData();
    }
      loadProfileData(){
        this.http.get('/assets/profile.json').subscribe((data: any) => {
          let newData: Profile = (data as Profile);
          this.experienceDetails = newData.experience;
        });
      }
  // experienceDetails = [
  //   {
  //     id: 1,
  //     role: 'Software Intern',
  //     company: 'Talentelgia Technologies',
  //     duration: 'Jun 2024 - Present',
  //     description: 'Worked on building modern web applications using Nest.js and React.',
  //   },
  //   {
  //     id: 2,
  //     role: 'Freelancer',
  //     company: 'Self-employed',
  //     duration: 'Jan 2023 - May 2024',
  //     description: 'Developed dynamic websites for clients in various industries.',
  //   },
  // ];


  editExperience(id: number) {
    console.log('Editing experience with ID:', id);
  }

  deleteExperience(id: number) {
    // this.experienceDetails = this.experienceDetails.filter(
    //   (exp) => exp.id !== id
    // );
  }

  addNewExperience() {
    console.log('Adding a new experience.');
  }
}
