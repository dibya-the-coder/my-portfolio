import { Component, OnInit } from '@angular/core';
import { DataProvider } from '../../data/data.service';
import { CommonModule } from '@angular/common';

import { CertificationCardComponent } from '../../component/certification-card/certification-card.component';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule, CertificationCardComponent],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.css',
  providers: [DataProvider]
})
export class AchievementsComponent implements OnInit{
  certifications: any[] = [];

  constructor(private dataProvider: DataProvider) { }

  ngOnInit() {
    this.certifications = this.dataProvider.getCertifications();
  }
}
