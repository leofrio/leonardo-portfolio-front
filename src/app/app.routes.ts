import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Faq } from './faq/faq';
import { Chatbot } from './chatbot/chatbot';
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'faq',
    component: Faq,
  },
  {
    path: 'chatBot',
    component: Chatbot,
  },
];
