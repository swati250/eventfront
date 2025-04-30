import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Registration } from '../models/registration';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
r:Registration=new Registration()
constructor(private rs:RegistrationService)
{

}
submitdata(regForm:any)
{
  if(!regForm.valid)
    alert('Invalid data')
  else
  {
  this.rs.register(this.r).subscribe((data)=>{
    if(data!=null)
      alert("Registration Successful")
  })
}
}}

