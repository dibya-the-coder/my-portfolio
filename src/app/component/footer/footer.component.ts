import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataProvider } from '../../data/data.service';
import { GithubComponent } from "../social-media/github/github.component";
import { LinkedinComponent } from "../social-media/linkedin/linkedin.component";
import { MailComponent } from "../social-media/mail/mail.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, GithubComponent, LinkedinComponent, MailComponent],
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
