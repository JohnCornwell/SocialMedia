import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: User | null = null;

  constructor(private http: HttpClient) { }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  createUser(Name: String, Lastname: String, Username: String, Password: String): Observable<HttpResponse<any>> {
    var body = {
      Username: Username,
      Password: Password,
      FirstName: Name,
      LastName: Lastname,
      Deleted: false
    }
    return this.http.post<any>("/signup", body, { observe: "response" });
  }
}
