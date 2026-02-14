import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataProvider } from '../../data/data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  profile: any;
  currentYear: number = new Date().getFullYear();

  constructor(private dataProvider: DataProvider) {}

  ngOnInit(): void {
    this.profile = this.dataProvider.getAllData();
  }
}
