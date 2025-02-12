import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'] // Fixed typo (was "styleUrl")
})
export class LoginpageComponent {
  
  user: any;
  loginform: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private route: Router) {

    this.loginform = fb.group({
      username: fb.control('', Validators.required),
      password: fb.control('', Validators.required)
    });
  }

  login() {
    // Check if username is 'admin'
    if (this.loginform.value.username === 'admin') {
      // Check if password is '1234'
      if (this.loginform.value.password === '1234') {

        Swal.fire({
          title: "Hello Admin",
          text: "Signed in Successfully",
          icon: "success"
        });

        this.user = { username: this.loginform.value.username };
        console.log('Setting user to localStorage:', this.user);  // Debugging log

        localStorage.setItem('loggedin', JSON.stringify(this.user));

        // Navigate to admin page
        this.route.navigateByUrl('/admin/search');
      }
    } else if (this.loginform.value.username !== 'admin') {
      // Check for non-admin users, password should be username + '123'
      if (this.loginform.value.password === this.loginform.value.username + '123') {

        Swal.fire({
          title: `Hello ${this.loginform.value.username}`,
          text: "Signed in Successfully",
          icon: "success"
        });

        this.user = { username: this.loginform.value.username };
        console.log('Setting user to localStorage:', this.user);  // Debugging log

        localStorage.setItem('loggedin', JSON.stringify(this.user));

        // Navigate to user page
        this.route.navigateByUrl('/user/search');
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Username or Password is incorrect",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      }
    }
  }

  Submit() {
    this.route.navigateByUrl('/user/search');
  }
}
