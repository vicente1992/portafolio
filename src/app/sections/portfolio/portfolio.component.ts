import { Component, OnInit } from '@angular/core';
import { projects, Projects } from './data/portafolio'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styles: [
  ]
})
export class PortfolioComponent implements OnInit {
  public projects: Projects[] = projects;
  constructor() { }

  ngOnInit(): void {
  }

}
