import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hall } from '../models/hall';

@Injectable({
  providedIn: 'root'
})
export class HallService {

  private baseurl='http://localhost:9002/project/halls';
  constructor(private http:HttpClient) { }

  createHall(hall:FormData):Observable<object>
  {
    return this.http.post(`${this.baseurl}`,hall);
  }
  getAll(){
    return this.http.get<Hall[]>(`${this.baseurl}`);
  }
  deleteHall(hallid:number)
  {
   return this.http.delete(`${this.baseurl}`+"/"+hallid)
  }
  getHallsByLocation(location: string): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:9002/project/hallsbylocation/${location}`);

  }
}
