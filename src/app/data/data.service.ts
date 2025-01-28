import { Injectable } from '@angular/core';
import { AllDataFields } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataProvider {

  private data = AllDataFields

  constructor() { }

  getAllData() {
    return this.data;
  }

  getProjectData() {
    return this.data.projects;
  }
  getProfilePicture(){
    return this.data.personalInfo.profilePicture;
  }
} 
