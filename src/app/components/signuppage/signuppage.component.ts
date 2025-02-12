import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrl: './signuppage.component.css'
})
export class SignuppageComponent {

  
  menuItems=['partnerOnboarding','legal','faqs']
  selectedSection: string = 'partnerOnboarding'; // Default section

  showContent(section: string) {
    this.selectedSection = section;
  
}
}