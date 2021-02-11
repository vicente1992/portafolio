import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';


import { Email } from '../interfaces/email.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private base_url: string = environment.url_base;
  constructor(private http: HttpClient) { }


  sendEmail(body: Email) {

    return this.http.post(this.base_url, body);
  }
}
