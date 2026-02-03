import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-section-tags',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-section-tags.component.html',
  styleUrl: './profile-section-tags.component.css'
})
export class ProfileSectionTagsComponent {
  @Input() title: string = '';
  @Input() tags: string[] = [];
  @Input() tagClass: string = 'bg-indigo-600'; // Default tag class
}
