import { Component } from '@angular/core';
import { FooddetailsService } from '../../services/fooddetails.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {


  constructor(private foodservice:FooddetailsService,private route:Router){}

  options: string[] = ['Biryani', 'Pizza', 'Burger', 'Pasta', 'Desserts', 'Chinese', 'Indian'];
  filteredOptions: string[] = [...this.options];
  searchQuery: any = '';

  filterOptions() {
    this.filteredOptions = this.searchQuery
      ? this.options.filter(option =>
          option.toLowerCase().includes(this.searchQuery.toLowerCase())
        )
      : [...this.options];
  }

  selectOption(option: string) {

    localStorage.setItem('option',option)
    this.foodservice.getoptiondata(option)

    this.route.navigateByUrl('/user/restaurantsearch')
    // if (option=='Biryani')
    // this.foodservice.getBiryanidata()
  }



  



   
}
