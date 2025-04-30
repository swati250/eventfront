import { Component } from '@angular/core';
import { Admin } from '../models/admin';
import { AdminService } from '../services/admin.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  imports: [FormsModule],
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
  a:Admin=new Admin
  constructor(private rs:AdminService,private router:Router)
  {
  
  }
  submitdata()
  {
    this.rs.login(this.a.email,this.a.password).subscribe((data)=>{
      if(data!=null)
      {
        alert("Login Successfully")
        localStorage.setItem("aemail",this.a.email)
        this.router.navigate(["/"])
      }
      
      else
      alert("invalid email and password")
    })
  }
}
