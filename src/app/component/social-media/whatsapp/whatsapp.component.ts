import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DataProvider } from '../../../data/data.service';

@Component({
  selector: 'social-whatsapp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatsapp.component.html',
  styleUrl: './whatsapp.component.css',
  providers: [DataProvider]
})
export class WhatsappComponent implements OnInit {
  @Input() size: string = 'fa-2x'; // Default size
  link: string = '';

  constructor(private dataProvider: DataProvider) {}

  ngOnInit() {
    const socialMedia = this.dataProvider.getSocialMedia();
    this.link = socialMedia?.whatsapp || '';
  }
}
