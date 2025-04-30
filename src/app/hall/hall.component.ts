import { Component } from '@angular/core';
import { Hall } from '../models/hall';
import { HallService } from '../services/hall.service';
import { Route, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Filehandle } from '../models/filehandle';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hall',
  imports: [FormsModule,CommonModule],
  templateUrl: './hall.component.html',
  styleUrl: './hall.component.css'
})
export class HallComponent {
hall:Hall=new Hall();
submitted=false;
errordata="";
 
 
constructor(private hallService:HallService,private router:Router,private sanitizer:DomSanitizer){}

ngOnInit()
{
  
}
newHall(): void {
this.submitted = false;
this.hall = new Hall();

}

save(){
  
  const formData=this.prepareFormData (this.hall);
  this.hallService.createHall(formData).subscribe((data)=>{
    if(data!=null){
      alert("hall added succesfully")
    console.log(data)
    this.gotoList()
    }
  },
    (  error: string) =>{console.log(error);
    this.errordata=error;
  
  })
  }
  prepareFormData(hall:Hall):FormData{
    const formData=new FormData()
    formData.append(
      'hall',
      new Blob([JSON.stringify(hall)],{type:"application/json"})
    );
    for(var i=0;i<hall.hallImages.length;i++)
  {
    formData.append(
      'imageFile',
      hall.hallImages[i].file,
      hall.hallImages[i].file.name
    );
    }
    return formData;
  }
  removeImage(i:number){
    this.hall.hallImages.splice(i,1)
  }
  onFileSelected (event:any){
    if(event.target.files){
      const file=event.target.files[0];
      const filehandle:Filehandle={
        file:file,
        url:this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file)),
        name:file.name
      }
      this.hall.hallImages.push(filehandle)
    }
  }
       onSubmit(){
        this.save();
        this.submitted=true;
        console.log("inside on submit")
       }
       
       gotoList(){
        this.router.navigate(['/']);
       }

}
 



