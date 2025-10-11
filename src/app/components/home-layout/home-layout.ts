import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Iproducts } from '../../models/iproducts';

@Component({
  selector: 'app-home-layout',
  imports: [CommonModule,RouterOutlet,Sidebar],
  templateUrl: './home-layout.html',
  styleUrl: './home-layout.css'
})
export class HomeLayout {


}
