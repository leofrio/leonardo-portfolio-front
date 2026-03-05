import { Component } from '@angular/core';
import { AnimateOnScrollModule, } from 'primeng/animateonscroll'; 


@Component({
  selector: 'app-home',
  imports: [AnimateOnScrollModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
