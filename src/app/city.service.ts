import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CityService {

  private baseUrl = 'http://localhost:8080/api/city';

  constructor(private http:HttpClient) { }

  getCityList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createCity(city: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`, city);
  }

  deleteCity(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCity(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateCity(id: number, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/${id}`, value);
  }

}
