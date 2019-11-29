import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IAwesome} from '../IAwesome';

@Injectable({
  providedIn: 'root'
})
export class AwesomeService {
  private url = 'http://localhost:3000/awesomes/';

  constructor(private http: HttpClient) { }
  getAll(): Observable<IAwesome[]> {
    return this.http.get<IAwesome[]>(this.url);
  }
  findById(id: number): Observable<IAwesome> {
    return this.http.get<IAwesome>(this.url + id);
  }
  create(data): Observable<IAwesome> {
    return this.http.post<IAwesome>(this.url, data);
  }
  edit(id: number, value: IAwesome): Observable<any> {
    return this.http.put(this.url + id, value);
  }
  delete(id: number) {
    return this.http.delete(this.url + id);
  }
}
