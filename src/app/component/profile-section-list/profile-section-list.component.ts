import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface ListItem {
  header: string; // e.g. Role or Degree
  subHeader: string; // e.g. Company or Institution
  description: string; // e.g. Description or Year
  details?: string; // Optional extra details (like description paragraph)
}

@Component({
  selector: 'app-profile-section-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-section-list.component.html',
  styleUrl: './profile-section-list.component.css'
})
export class ProfileSectionListComponent {
  @Input() title: string = '';
  @Input() items: ListItem[] = [];
  @Input() borderColorClass: string = 'border-blue-500'; // Default border color
}
