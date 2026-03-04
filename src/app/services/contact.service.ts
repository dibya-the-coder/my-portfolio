import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, ContactRequest, EmailResponseData } from '../models/contact.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private readonly apiUrl = 'https://dibyadev-email-service.azurewebsites.net/api/SendEmail';
  private readonly code = environment.emailCode;

  constructor(private http: HttpClient) {}

  sendEmail(request: ContactRequest): Observable<ApiResponse<EmailResponseData>> {
    const params = new HttpParams().set('code', this.code);
    return this.http.post<ApiResponse<EmailResponseData>>(this.apiUrl, request, { params });
  }
}
