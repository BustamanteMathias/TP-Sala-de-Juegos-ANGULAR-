import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {
  }

  Get(){
    return this.http.get('https://dog.ceo/api/breed/hound/images');
  }
}
