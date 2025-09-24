import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./components/footer/footer";
import { Navbar } from './components/navbar/navbar';
import { Sidebar } from './components/sidebar/sidebar';
// import { Home} from './components/home/home';
import { Header } from './components/header/header';
import { Products } from "./components/products/products";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Sidebar, Header, Products],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('App');
}
