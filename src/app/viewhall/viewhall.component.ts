import { Component, OnInit } from '@angular/core';
import { Hall } from '../models/hall';
import { HallService } from '../services/hall.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-viewhall',
  imports: [CommonModule],
  templateUrl: './viewhall.component.html',
  styleUrl: './viewhall.component.css'
})
export class ViewhallComponent implements OnInit{
 

 hall:Hall[]=[]
  loc=""
 constructor(private hallService:HallService,private router:Router,private route:ActivatedRoute){

 }
 getAllHall()
 {
  this.hallService.getHallsByLocation(this.loc).subscribe((response:Hall[])=>{
    console.log(response)
    this.hall=response
  },
  (error:HttpErrorResponse)=>{
console.log(error)
  });

 }
  ngOnInit(): void {
this.loc=this.route.snapshot.params['loc']
    this.getAllHall()
    console.log(localStorage.getItem("emailid"))
  }
  
  
}
