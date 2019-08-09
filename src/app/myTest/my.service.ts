import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';

export interface Iuser {
  name?: string;
  email: string;
  password?: string;
  avatar?: string;
  companyList?: any[];
}

@Injectable()
export class MyUserService {
  private url = 'http://localhost:5000';
  public currentUser: any;
  // public name: string;

  constructor(private http: HttpClient) {}

  getUser(user: Iuser) {
    this.http
      .post(`${this.url}/api/users/`, user)
      .subscribe(user1 => (this.currentUser = user1));
    console.log('my serv');
    console.log(this.currentUser);
    return this.currentUser;
  }
  // setUser(name) {
  //   this.name = name;
  //   console.log('my serv set');
  //   console.log(this.name);
  //   console.log(this.currentUser);
  // }

  getU(): Iuser {
    const name = this.currentUser;
    console.log('my serv get');
    console.log(name);
    return name;
  }
  regUser(user: Iuser) {
    this.currentUser = this.http.post(`${this.url}/api/users/register`, user);
    // console.log(this.currentUser);
    return this.currentUser;
  }

  // getUser(user: Iuser) {
  //   return this.http.post(`${this.url}/api/users/`, user);
  // }

  // regUser(user: Iuser) {
  //   return this.http.post(`${this.url}/api/users/register`, user);
  // }

  // getAllCats(): Observable<Cat[]> {
  //   return this.http.get<Cat[]>('http://localhost:8000/api/cats');
  // }

  // getUser(name: string): Observable<Iuser> {
  //   return this.http.get<Iuser>('http://localhost:8000/api/users/' + name);
  // }

  // updatUser(user: Iuser): Observable<void> {
  //   return this.http.put<void>(
  //     'http://localhost:8000/api/users/' + user.name,
  //     user
  //   );
  // }

  // deletUser(name: string) {
  //   return this.http.delete('http://localhost:8000/api/users/' + name);
  // }
}
