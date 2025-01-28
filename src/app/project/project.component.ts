import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Profile } from '../dtos/profile';
import { DataProvider } from '../data/data.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [DataProvider],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  projects :any;
  constructor(private dataProvider: DataProvider){}

ngOnInit(){
  this.loadProfileData();
}
  loadProfileData(){
    this.projects = this.dataProvider.getProjectData();
  }
}
