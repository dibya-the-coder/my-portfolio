import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { GithubComponent } from '../../component/social-media/github/github.component';
import { LinkedinComponent } from '../../component/social-media/linkedin/linkedin.component';
import { MailComponent } from '../../component/social-media/mail/mail.component';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, GithubComponent, LinkedinComponent, MailComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @ViewChild('contactForm') contactForm!: NgForm;

  contact = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitting = false;
  submitStatus: 'success' | 'error' | null = null;
  statusMessage = '';

  constructor(private contactService: ContactService) {}

  onSubmit() {
    if (this.contact.name && this.contact.email && this.contact.message) {
      this.isSubmitting = true;
      this.submitStatus = null;
      this.statusMessage = '';

      this.contactService.sendEmail(this.contact).subscribe({
        next: (response) => {
          this.isSubmitting = false;
          if (response.statusCode === 200) {
            this.submitStatus = 'success';
            this.statusMessage = response.message || 'Message sent successfully!';
            this.resetForm();
          } else {
            this.submitStatus = 'error';
            this.statusMessage = response.error || response.message || 'Failed to send message.';
          }
        },
        error: (err) => {
          this.isSubmitting = false;
          this.submitStatus = 'error';
          this.statusMessage = 'An unexpected error occurred. Please try again later.';
          console.error('Email submission error:', err);
        }
      });
    }
  }

  private resetForm() {
    this.contactForm.resetForm();
  }
}
