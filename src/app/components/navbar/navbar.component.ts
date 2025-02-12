import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  Username: string = '';  

  ngOnInit() {
    const userData = localStorage.getItem('loggedin');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      this.Username = parsedUser.username;  
    }
  }
  

}
