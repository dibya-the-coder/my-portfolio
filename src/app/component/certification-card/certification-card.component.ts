import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-certification-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certification-card.component.html',
  styleUrl: './certification-card.component.css'
})
export class CertificationCardComponent {
  @Input() cert: any; // Type 'any' for now, ideally interface
}
