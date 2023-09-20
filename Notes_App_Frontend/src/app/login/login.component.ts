import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg: any;
  user = new User();

  constructor(private service: ServicesService, private router: Router) { }

  ngOnInit(): void {
    // Any initialization code you may have
  }

  // Method to authenticate and log in the user
  loginUser() {
    localStorage.clear();
    const loginData = {
      "userName": this.user.email,
      "password": this.user.password
    }

    this.service.generateToken(loginData).subscribe({
      next: (data: any) => {
        this.service.loginUserToken(data.token);
        this.service.getCurrentUser().subscribe({
          next: (user: any) => {
            this.service.setUser(user);
            // Check if login was successful and then navigate to "viewnotes"
            if (user) {
              this.router.navigate(['home']);
            } else {
              this.msg = "Login failed. Please check your credentials.";
            }
          },
          error: (error) => {
            console.log("Error");
            this.msg = "Please Check Your Email | Password";
          }
        });
      },
      error: (error) => {
        console.log("Error");
        this.msg = "Please Check Your Email | Password";
      }
    });
  }

  // Method to check if a user is logged in
  loggedIn() {
    return this.service.isLogIn();
  }

  // Method to log out the user and navigate to the home page
  logout() {
    this.service.logout();
    this.router.navigate(['viewnotes']);
  }
}
