import { Component,  inject } from '@angular/core';
import { AutoCompleteModule,AutoCompleteCompleteEvent, AutoCompleteSelectEvent } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';            // <-- for ngModel

import Fuse from 'fuse.js';

@Component({
  selector: 'navbar',
  imports: [AutoCompleteModule, ButtonModule, RouterLink, FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private readonly router = inject(Router);
  searchValue: string = '';
  items = [
    { name: 'Home', route: '/' },
    { name: 'FAQ', route: '/faq' },
    { name: 'Chatbot', route: '/chatBot' },
  ];
  fiteredSuggestions: any[] = [];

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
}

