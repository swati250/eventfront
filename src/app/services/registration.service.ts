import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registration } from '../models/registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
serverurl="http://localhost:9002/registration"
  constructor(private http:HttpClient) { }
getAll():Observable<Registration[]>
{
  return this.http.get<Registration[]>(this.serverurl)
}
register(r:Registration):Observable<Registration>
{
  return this.http.post<Registration>(this.serverurl,r)
}
search(i:any):Observable<Registration>

{
  return this.http.get<Registration>(this.serverurl+"/"+i)
}
del(i:any):Observable<any>
{
  return this.http.delete(this.serverurl+"/"+i)
}
update(i:any,r:Registration):Observable<Registration>
{
  return this.http.put<Registration>(this.serverurl+"/"+i,r)
}
login(em:any,ps:any):Observable<Registration[]>
{
  return this.http.get<Registration[]>(this.serverurl+"/"+em+"/"+ps)
}


}
