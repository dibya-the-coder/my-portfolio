import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Profile } from '../../dtos/profile';
import { Project } from '../../dtos/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'], // Ensure correct plural usage here
})
export class ProjectComponent {
  projectDetails: Project[] = []; // Properly typed as an array of `Project`

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadProfileData();
  }

  loadProfileData() {
    this.http.get('/assets/profile.json').subscribe(
      (data: any) => {
        const newData: Profile = data as Profile;
        this.projectDetails = newData.projects;
      },
    );
  }

  editProject(index: number) {
    console.log('Editing project at index:', index);
    // Add edit logic here, such as opening a modal with editable fields
  }

  deleteProject(index: number) {
    this.projectDetails.splice(index, 1); // Remove project by index
    console.log('Deleted project at index:', index);
  }

  addNewProject() {
    const newProject: Project = {
      name: 'New Project',
      description: 'Description of the new project.',
      previewImage: '',
      technologies: ['HTML', 'CSS', 'JavaScript'], // Example tech stack
      projectLink: 'https://example.com',
    };
    this.projectDetails.push(newProject); // Add the new project to the list
    console.log('Added new project:', newProject);
  }
}
