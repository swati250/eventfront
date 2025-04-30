import { Component, OnInit } from '@angular/core';
import { Eventdetail } from '../models/eventdetail';
import { EventdetailService } from '../services/eventdetail.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vieweventdetail',
  imports: [CommonModule],
  templateUrl: './vieweventdetail.component.html',
  styleUrl: './vieweventdetail.component.css'
})
export class VieweventdetailComponent implements OnInit {

  earr:Eventdetail[]=[]
  constructor(private eserve:EventdetailService)
{

}
  ngOnInit(): void {
    this.eserve.getAll().subscribe(data=>{
      if(data.length>0)
        this.earr=data
    })
  }

}
