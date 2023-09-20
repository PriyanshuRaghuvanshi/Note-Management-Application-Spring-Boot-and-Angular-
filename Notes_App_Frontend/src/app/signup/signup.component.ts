import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  msg: any;
  user = new User();
  registrationSuccessful: boolean = false;


  constructor(private service: ServicesService, private router: Router) { }

  ngOnInit(): void {

  }

  // Method to register a new user
  registerUser() {
    
    this.service.registerUser(this.user).subscribe({
      next: (data) => {
        console.log("Success!");
        this.registrationSuccessful = true;
        this.service.setUser(data);
        
        this.service.isLoggedIn = true;
        this.router.navigate(['login'], { queryParams: { registered: true }});
       
      },
      error: (err) => {
        console.log("Error!");
        this.msg = "Please Check Your Email | Password";
      }
    });
  }
}
