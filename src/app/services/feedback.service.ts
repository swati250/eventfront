import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from '../models/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  serverurl="http://localhost:9002/feedback"
  
  constructor(private http:HttpClient) { }
getAll():Observable<Feedback[]> 
{
  return this.http.get<Feedback[]>(this.serverurl)
}
feedback(f:Feedback):Observable<Feedback>
{
  return this.http.post<Feedback>(this.serverurl,f)
}
search(i:any):Observable<Feedback>
{
  return this.http.get<Feedback>(this.serverurl+"/"+i)
}
del(i:any):Observable<any>
{
  return this.http.delete(this.serverurl+"/"+i)
}
update(i:any,f:Feedback):Observable<Feedback>
{
  return this.http.put<Feedback>(this.serverurl+"/"+i,f)
}

}