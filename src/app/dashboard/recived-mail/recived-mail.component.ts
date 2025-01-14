import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Profile } from '../../dtos/profile';
import { Mail } from '../../dtos/mail';
@Component({
  selector: 'app-recived-mail',
  templateUrl: './recived-mail.component.html',
  styleUrl: './recived-mail.component.css',
})
export class RecivedMailComponent {
  isModalOpen: boolean = false;

  // Selected Mail Data
  selectedMail: any = null;

  // Example Mail List
  mails: Mail[] | undefined;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadProfileData();
  }

  loadProfileData() {
    this.http.get('/assets/profile.json').subscribe((data: any) => {
      const newData: Profile = data as Profile;
      this.mails = newData.mails;
    });
  }

  // Open Modal and Set Selected Mail
  openModal(mail: any) {
    this.selectedMail = mail;
    this.isModalOpen = true;
  }

  // Close Modal
  closeModal() {
    this.isModalOpen = false;
  }
}
