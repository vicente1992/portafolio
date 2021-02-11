import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public downloadCv() {
    const downloadPdf = document.createElement("a");
    downloadPdf.href = 'assets/cv.pdf';
    downloadPdf.download = "cv.pdf",
      downloadPdf.click();
  }

}
