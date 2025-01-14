import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, HttpClientModule  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  profile: any;
  
  constructor(private http: HttpClient){}

  ngOnInit(){
    this.loadProfileData();
  }

  loadProfileData(){
    this.http.get('/assets/profile.json').subscribe((data) => {
      this.profile= data;
      console.log(data)
    });
  }

  addTechnology(category: 'handsOn' | 'workedOn', newTechnology: string) {
    if (newTechnology) {
      this.profile.technologies[category].push(newTechnology);
    }
  }

  removeTechnology(category: 'handsOn' | 'workedOn', index: number) {
    this.profile.technologies[category].splice(index, 1);
  }
}
