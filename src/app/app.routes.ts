import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { Faq } from './components/pages/faq/faq';
import { Chatbot } from './components/pages/chatbot/chatbot';
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
