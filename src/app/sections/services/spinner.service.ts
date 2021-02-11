import { Injectable } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor(private spinner: NgxSpinnerService) { }

  showSpinner() {
    return this.spinner.show();
  }


  hideSpinner() {
    return this.spinner.hide();
  }
}
