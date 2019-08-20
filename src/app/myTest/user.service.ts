import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { user2 } from './users';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';

export interface Iuser {
  name?: string;
  email?: string;
  password?: string;
  avatar?: string;
  companyList?: string[];
  role?: string;
  registered?: boolean;
}

@Injectable()
export class MyUserService {
  private url = 'http://localhost:5000';
  public currentUser: Iuser;
  error: any;

  constructor(private http: HttpClient) {
    this.currentUser = {
      name: 'Test',
      role: 'Owner',
      registered: true,
      companyList: ['MTS', 'Microsoft inc.'],
      avatar: '../../../assets/image/profile-1.jpg'
    };
    this.getUser(user2.email);
  }

  setUser(company: string) {
    this.currentUser.registered = true;
    this.currentUser.role = 'Owner';
    this.currentUser.companyList.push(company);
    return this.currentUser;
  }

  getUser(user) {
    this.http.get(`${this.url}/api/users/${user}`).subscribe(
      data => {
        this.currentUser = data[0];
      },
      error => {
        this.error = error.message;
        console.log(error);
      }
    );
    if (!this.currentUser.avatar) {
      this.currentUser.avatar = '../../../assets/image/profile-1.jpg';
    }
    this.currentUser.registered = true;
  }

  get() {
    return this.currentUser;
  }

  regUser(user: Iuser) {
    this.http.post(`${this.url}/api/users/register`, user).subscribe(
      data => {
        this.currentUser = data;
      },
      error => {
        this.error = error.message;
        console.log(error);
      }
    );
    if (!this.currentUser.avatar) {
      this.currentUser.avatar = '../../../assets/image/profile-1.jpg';
    }
    this.currentUser.registered = false;
  }
}
