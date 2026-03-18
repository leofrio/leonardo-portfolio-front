import { Component, inject, makeStateKey } from '@angular/core';
import {
  AutoCompleteModule,
  AutoCompleteCompleteEvent,
  AutoCompleteSelectEvent,
} from 'primeng/autocomplete';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; // <-- for ngModel

import Fuse from 'fuse.js';
import { fontaIcons } from '../../../static/fontaIcons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'navbar',
  imports: [AutoCompleteModule, ButtonModule, RouterLink, FormsModule, FontAwesomeModule, TooltipModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private readonly router = inject(Router);
  searchValue: string = '';
  items = [
    { name: 'Home', route: '/', mobileIcon: 'mobile_home.svg' },
    { name: 'FAQ', route: '/faq', mobileIcon: 'mobile_faq.svg' },
    { name: 'Chatbot', route: '/chatBot', mobileIcon: 'mobile_chatbot.svg' },
  ];
  externalLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/leofrio/leonardo-portfolio-front',
      isLayered: false,
      icon: fontaIcons.brands.faGithub,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/leonardo-pontes-gaspar-7aabab248/',
      isLayered: true,
      icon: fontaIcons.brands.faLinkedinIn,
      mask: fontaIcons.solid.faSquare,
      isInversedIcon: true,
      isInversedMask: false,
      additionalStyleMask: 'color:#0a66c2',
      additionalStyleIcon: 'color:white',
      transform: 'shrink-4.5 down-.5',
    },
  ];
  fiteredSuggestions: any[] = [];
  // pi pi-external-link
  readonly fontaIcons = fontaIcons;
  completeSearch(event: AutoCompleteCompleteEvent) {
    const query = event.query;
    const fuse = new Fuse(this.items, { keys: ['name'], threshold: 0.5 });
    this.fiteredSuggestions = fuse.search(query).map((result) => result.item);
  }
  selectItem(event: AutoCompleteSelectEvent) {
    const selectedItem = event.value;
    const routeChosen = selectedItem.route;
    this.router.navigateByUrl(routeChosen);
    this.searchValue = '';
  }
  goToHome() {
    this.router.navigateByUrl('/');
  }
  openExternalLink(eLink: string) {
    window.open(eLink, '_blank');
  }

  isRouteActive(route: string): boolean {
    const current = this.router.url.toLowerCase();
    const target = route.toLowerCase();
    if (target === '/') {
      return current === '/' || current.startsWith('/home');
    }
    return current.startsWith(target);
  }
}
