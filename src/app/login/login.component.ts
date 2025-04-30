import { Component } from '@angular/core';
import { Registration } from '../models/registration';
import { FormsModule } from '@angular/forms';
import { RegistrationService } from '../services/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
r:Registration=new Registration
constructor(private rs:RegistrationService,private router:Router)
{

}
submitdata()
{
  this.rs.login(this.r.email,this.r.password).subscribe((data)=>{
    if(data.length>0)
    {
      alert("Login Successfully")
      localStorage.setItem("email",this.r.email)
      this.router.navigate(['/'])
    }
    else
    alert("invalid email and password")
  })
}
}
