import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Profile } from '../dtos/profile';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  projects :any;
  constructor(private http: HttpClient){}

ngOnInit(){
  this.loadProfileData();
}
  loadProfileData(){
    this.http.get('/assets/profile.json').subscribe((data: any) => {
      let newData: Profile = (data as Profile);

      this.projects = newData.projects;
      console.log("data=======",data.projects)
    });
  }
}
