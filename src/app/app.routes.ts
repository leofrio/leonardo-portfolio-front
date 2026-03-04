import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Faq } from './pages/faq/faq';
import { Chatbot } from './pages/chatbot/chatbot';
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
