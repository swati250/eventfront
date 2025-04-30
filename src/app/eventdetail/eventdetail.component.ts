import { Component } from '@angular/core';
import { Eventdetail } from '../models/eventdetail';
import { EventdetailService } from '../services/eventdetail.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventdetail',
  imports: [FormsModule,CommonModule],
  templateUrl: './eventdetail.component.html',
  styleUrl: './eventdetail.component.css'
})
export class EventdetailComponent {
 e:Eventdetail=new Eventdetail()

constructor(private es:EventdetailService,private router:Router)
{

}
 submitdata(eveForm:any)
 {
  if(!eveForm.valid)
    alert('Invalid data')
  else
  {
    
this.es.eventdetail(this.e).subscribe((data)=>{
  if(data!=null)
    alert("successfully submited data")
 this.router.navigate(['/viewhall',this.e.location])
})
 }
}
}

