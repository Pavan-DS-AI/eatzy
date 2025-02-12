import { Component } from '@angular/core';
import { RestaruantdetailsService } from '../../services/restaruantdetails.service';
import { FooddetailsService } from '../../services/fooddetails.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurantsearch',
  templateUrl: './restaurantsearch.component.html',
  styleUrl: './restaurantsearch.component.css'
})
export class RestaurantsearchComponent {

  constructor(private resdetailsservice:RestaruantdetailsService,private foodservice:FooddetailsService,private route:Router){}

  restdetails:any[]=[]
  
  restId:any[]=[]
  ngOnInit(){

    this.foodservice.getresiddata().subscribe(data=>{
    this.restId=data})

    console.log(this.restId)
    this.resdetailsservice.getrestbyid(this.restId).subscribe(hee=>{
    this.restdetails=hee

    console.log(this.restdetails)
    })
  }


  openmenu(id:any){
    console.log(id)
    this.route.navigateByUrl('/user/viewmenu/'+id)
  }
}
