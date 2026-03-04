import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { fontaIcons } from '../static/fontaIcons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'footer',
  imports: [DividerModule, FontAwesomeModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly fontaIcons = fontaIcons;
}
