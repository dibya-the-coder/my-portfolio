import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataProvider } from '../data/data.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
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

}
