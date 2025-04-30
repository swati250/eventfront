import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Eventdetail } from '../models/eventdetail';

@Injectable({
  providedIn: 'root'
})
export class EventdetailService {
 serverurl="http://localhost:9002/eventdetail"
 constructor(private http:HttpClient) { }

 getAll():Observable<Eventdetail[]>
 {
  return this.http.get<Eventdetail[]>(this.serverurl)
 }
 eventdetail(e:Eventdetail):Observable<Eventdetail>
 {
  return this.http.post<Eventdetail>(this.serverurl,e)
 }
 search(i:any):Observable<Eventdetail>
 {
  return this.http.get<Eventdetail>(this.serverurl+"/"+i)
 }
 del(i:any):Observable<any>
 {
  return this.http.delete(this.serverurl+"/"+i)
 }
 update(i:any,e:Eventdetail):Observable<Eventdetail>
 {
  return this.http.put<Eventdetail>(this.serverurl+"/"+i,e)
 }


}
