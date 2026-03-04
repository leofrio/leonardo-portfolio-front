import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./shared/navbar/navbar"; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Footer } from './shared/footer/footer';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar,FontAwesomeModule,Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('leonardo-portfolio-front');
}
 