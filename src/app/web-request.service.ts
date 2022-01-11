import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:4200'
   }

  get(url:String) {
    return this.http.get(`${this.ROOT_URL}/${url})}`);
  }

  post(url: String, payload: Object){
    return this.http.post(`${this.ROOT_URL}/${url})}`, payload)
  }

  patch(url: String, payload: Object){
    return this.http.patch(`${this.ROOT_URL}/${url})}`, payload)
  }
  delete(url: String) {
    return this.http.delete(`${this.ROOT_URL}/${url})}`)
  }
}
