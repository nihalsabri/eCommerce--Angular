import { Component } from '@angular/core';
import {Store} from '../../models/store';
import { RouterLink, RouterLinkActive, RouterModule } from "@angular/router"; // double check here : improt from @angular/router

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive,RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {


propStore!:Store;
clientName = 'Nihal';

constructor(){
  this.propStore = new Store( "eStore", "https://img.freepik.com/premium-vector/estore-logo-design-vector-templet_1070930-156.jpg", ["cairo","Giza"] )
}

}
