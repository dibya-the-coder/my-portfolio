import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DataProvider } from '../../../data/data.service';

@Component({
  selector: 'social-linkedin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './linkedin.component.html',
  styleUrl: './linkedin.component.css',
  providers: [DataProvider]
})
export class LinkedinComponent implements OnInit {
  @Input() size: string = 'fa-2x'; // Default size
  link: string = '';

  constructor(private dataProvider: DataProvider) {}

  ngOnInit() {
    const socialMedia = this.dataProvider.getSocialMedia();
    this.link = socialMedia?.linkedin || '';
  }
}
