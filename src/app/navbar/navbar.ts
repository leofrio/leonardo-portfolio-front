import { Component } from '@angular/core';
import { AutoCompleteModule,AutoCompleteSelectEvent } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';            // <-- for ngModel

import Fuse from 'fuse.js';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'navbar',
  imports: [AutoCompleteModule, ButtonModule, RouterLink, FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  constructor(private router: Router) {}
  search: any;
  suggestions: any[] = [];
  filteredSuggestions: any[] = [];
  searchSuggestions(event: AutoCompleteCompleteEvent) {
    this.suggestions = [
      { name: 'login', route: '/' },
      { name: 'login with steam', route: '/' },
      { name: 'authenticate', route: '/' },
      { name: 'get into steam', route: '/' },
      { name: 'Chats', route: '/chat' },
      { name: 'talk to AI', route: '/chat' },
      { name: 'recommend games', route: '/chat' },
      { name: 'recommend me games', route: '/chat' },
      { name: 'chatbot', route: '/chat' },
      { name: 'talk to chatbot', route: '/chat' },
      { name: 'FAQ', route: '/faq' },
      { name: 'How can I create an account?', route: '/faq' },
      { name: 'How can I recover my password?', route: '/faq' },
      { name: 'Can I change my username?', route: '/faq' },
    ];
    const fuse = new Fuse(this.suggestions, {
      keys: ['name'],
      threshold: 0.5,
    });
    this.filteredSuggestions = fuse.search(event.query).map((result) => result.item);
  }
  selectItem(event: AutoCompleteSelectEvent) {
    const selectedItem = event.value as any;
    const routeChosen = selectedItem.route;
    this.router.navigateByUrl(routeChosen);
    this.search = '';
  }
}

