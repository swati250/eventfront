import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contactus } from '../models/contactus';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {
serverurl="http://localhost:9002/ContactUs"
 constructor(private http:HttpClient){}
  getAll():Observable<Contactus[]>
  {
    return this.http.get<Contactus[]>(this.serverurl)
  }
  contactus(c:Contactus):Observable<Contactus>
  {
    return this.http.post<Contactus>(this.serverurl,c)
  }
  search(i:any):Observable<Contactus>
  {
    return this.http.get<Contactus>(this.serverurl+"/"+i)
  }
  del(i:any):Observable<any>
  {
    return this.http.delete(this.serverurl+"/"+i)

  }
  update(i:any,c:Contactus):Observable<Contactus>
  {
    return this.http.put<Contactus>(this.serverurl+"/"+i,c)
  }
}
