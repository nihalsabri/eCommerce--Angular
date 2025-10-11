import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./components/footer/footer";
import { Navbar } from './components/navbar/navbar';
import { Sidebar } from './components/sidebar/sidebar';
import { Home} from './components/home/home';
import { Header } from './components/header/header';
import { Products } from "./components/products/products";
import { MainComponent } from "./components/main-component/main-component";
 //routing  step2: import routeroutlet
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('App');
}
