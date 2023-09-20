import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchQuery: any;
  products: any;
  stats: any;

  constructor(private service: ServicesService, private router: Router) { }

  ngOnInit(): void {
  
  }



 

  // Method to check if a user is logged in
  loggedIn() {
    return this.service.isLogIn();
  }

  // Method to log out the user and navigate to the home page
  logout() {
    this.service.logout();
    this.router.navigate(['home']);
  }

  // Method to get the current user
  currentUser() {
    return this.service.getUser();
  }

 


}
