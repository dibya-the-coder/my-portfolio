import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DataProvider } from '../../../data/data.service';

@Component({
  selector: 'social-mail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mail.component.html',
  styleUrl: './mail.component.css',
  providers: [DataProvider]
})
export class MailComponent implements OnInit {
  @Input() size: string = 'fa-2x'; // Default size
  email: string = '';

  constructor(private dataProvider: DataProvider) {}

  ngOnInit() {
    const data = this.dataProvider.getAllData();
    this.email = data?.personalInfo?.email || '';
  }
}
