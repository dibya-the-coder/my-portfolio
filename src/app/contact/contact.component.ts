import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { GithubComponent } from '../component/social-media/github/github.component';
import { LinkedinComponent } from '../component/social-media/linkedin/linkedin.component';
import { WhatsappComponent } from '../component/social-media/whatsapp/whatsapp.component';
import { MailComponent } from '../component/social-media/mail/mail.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, GithubComponent, LinkedinComponent, WhatsappComponent, MailComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    if (this.contact.name && this.contact.email && this.contact.message) {
      // Handle form submission logic here
      console.log('Form Submitted', this.contact);
    }
  }
}
