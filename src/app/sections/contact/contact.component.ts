import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { NotificationService } from '../services/notification.service';
import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  public contactForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private notificationService: NotificationService,
    private spinnerService: SpinnerService,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }
  private createForm() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    })
  }

  public fieldIsInvalid(field: string) {
    return this.contactForm.controls[field].invalid
      && this.contactForm.controls[field].touched;
  }

  public sendEmail() {

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.spinnerService.showSpinner();
    this.contactService.sendEmail(this.contactForm.value)
      .subscribe((resp: any) => {
        this.notificationService.success(resp.message)
        this.contactForm.reset();
        this.spinnerService.hideSpinner();
      });
  }

}
