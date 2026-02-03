import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DataProvider } from '../../../data/data.service';

@Component({
  selector: 'social-github',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './github.component.html',
  styleUrl: './github.component.css',
  providers: [DataProvider]
})
export class GithubComponent implements OnInit {
  @Input() size: string = 'fa-2x'; // Default size
  link: string = '';

  constructor(private dataProvider: DataProvider) {}

  ngOnInit() {
    const socialMedia = this.dataProvider.getSocialMedia();
    this.link = socialMedia?.github || '';
  }
}
