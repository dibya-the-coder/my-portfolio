import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Profile } from '../../dtos/profile';
import { Education } from '../../dtos/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educationDetails: Education[] = [];
  constructor(private http: HttpClient) { }
  ngOnInit(){
    this.loadProfileData();
  }
    loadProfileData(){
      this.http.get('/assets/profile.json').subscribe((data: any) => {
        let newData: Profile = (data as Profile);
        this.educationDetails = newData.education;
        console.log("education=======",newData.education)
      });
    }

  addNewEducation() {
    console.log('Redirect to Add Education Form');
  }

  editEducation(id: number) {
    console.log(`Edit Education with ID: ${id}`);
  }

  deleteEducation(id: number) {
    const confirmed = confirm('Are you sure you want to delete this education detail?');
    if (confirmed) {
      // this.educationDetails = this.educationDetails.filter((edu) => edu.id !== id);
    }
  }
}
