import { Component } from '@angular/core';
import { fontaIcons } from '../../../static/fontaIcons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-home',
  imports: [FaIconComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly fontaIcons = fontaIcons;
  readonly fullName = ['Leonardo', 'Pontes', 'Gaspar'];
  
  scrollIntoView(selector: string) {
    const scrollToDocument = document.querySelector(selector) as HTMLElement;
    scrollToDocument.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
