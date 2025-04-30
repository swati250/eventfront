import { Component } from '@angular/core';
import { Feedback } from '../models/feedback';
import { FeedbackService } from '../services/feedback.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback',
  imports: [FormsModule,CommonModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
f:Feedback=new Feedback()
constructor(private fs:FeedbackService)
{

}
submitdata(fedForm:any)
{
  if(!fedForm.valid)
    alert('Invalid data')
  else
  {
  this.fs.feedback(this.f).subscribe((data)=>{
    if(data!=null)
      alert("feedback successful")
  })
}
}
}
