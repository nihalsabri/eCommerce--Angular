import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Home } from '../home/home';
import { Products } from '../products/products';

@Component({
  selector: 'app-main-component',
  imports: [Navbar,Footer,RouterOutlet,Header,RouterModule],
  templateUrl: './main-component.html',
  styleUrl: './main-component.css'
})
export class MainComponent {

}
