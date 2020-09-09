import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CityService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http:HttpClient) { }

  getCityList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'city-list');
  }

  createCity(city: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`+'save-city', city);
  }

  deleteCity(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-city/${id}`, { responseType: 'text' });
  }

  getCity(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/city/${id}`);
  }

  updateCity(id: number, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/update-city/${id}`, value);
  }

}
