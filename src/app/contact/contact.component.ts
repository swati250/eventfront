import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Contactus } from '../models/contactus';
import { ContactusService } from '../services/contactus.service';

@Component({
  selector: 'app-contact',
  imports: [FormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  c:Contactus=new Contactus()
constructor(private cs:ContactusService)
{

}
  submitdata(conForm:any)
  {
    if(!conForm.valid)
      alert('Invalid data')
    else
    {
     this.cs.contactus(this.c).subscribe((data)=>{
      if(data!=null)
        alert("submited data")
     })
  }
}
}
