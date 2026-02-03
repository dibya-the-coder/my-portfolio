import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { routes } from '../app.routes';
import { RouterModule } from '@angular/router';
import { DataProvider } from '../data/data.service';

import { GithubComponent } from '../component/social-media/github/github.component';
import { LinkedinComponent } from '../component/social-media/linkedin/linkedin.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [RouterModule, CommonModule, GithubComponent, LinkedinComponent],
  providers: [DataProvider]
})
export class HomeComponent implements OnInit {
  socialMedia: any;

  constructor(private dataProvider: DataProvider) { }

  ngOnInit() {
    this.socialMedia = this.dataProvider.getSocialMedia();
  }
}
