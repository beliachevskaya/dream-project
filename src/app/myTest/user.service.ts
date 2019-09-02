import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AngularFirestore } from '@angular/fire/firestore';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';
export const EMPTY_USER = {
  uid: '',
  id: '',
  name: '',
  email: '',
  role: '',
  registered: false,
  companyList: [],
  avatar: '../../../assets/image/profile-1.jpg'
};

export interface IUser {
  id?: string;
  uid?: string;
  name?: string;
  email?: string;
  password?: string;
  avatar?: string;
  companyList?: string[];
  role?: string;
  tel?: string;
  workload?: [number, string];
  registered?: boolean;
}

@Injectable()
export class MyUserService {
  private url = 'http://localhost:5000';
  public currentUser: IUser;
  public userList: any;
  error: any;
  users: Observable<IUser[]>;

  private userName = new BehaviorSubject('');
  currentUserName = this.userName.asObservable();
  usersСhanged(name: string) {
    this.userName.next(name);
  }

  constructor(private http: HttpClient, private db: AngularFirestore) {
    this.getAllUsers();
  }

  addCompanyToUser(company: string): IUser {
    this.currentUser.registered = true;
    this.currentUser.role = 'Owner';
    if (!this.currentUser.companyList.some(item => item === company)) {
      this.currentUser.companyList.push(company);
      this.setUser(this.currentUser);
    }
    return this.currentUser;
  }

  getUser(userEmail): void {
    this.db
      .collection('users', ref => ref.where('email', '==', userEmail))
      .valueChanges()
      .subscribe(user => {
        [this.currentUser] = user; this.currentUser.registered = true;
      }, error => {
        console.log(`Error:${error}`);
      });
  }

  getCurrentUser(): IUser {
    return this.currentUser;
  }

  registerUser(
    name,
    email,
    uid,
    photoUrl: string = '../../../assets/image/profile-1.jpg'
  ) {
    console.log('reg');

    if (!this.userList.some(user => user.email === email)) {
      this.currentUser = {
        uid: uid,
        id: '',
        name: name,
        email: email,
        role: '',
        registered: false,
        companyList: [],
        avatar: photoUrl
      };

      this.db.collection('users').add(this.currentUser).then(doc => {
        this.currentUser.id = doc.id;
        this.setUser(this.currentUser);
      });
    } else { this.getUser(email) }
  }

  setUser(user: IUser) {
    user.companyList = user.companyList.filter(company => company !== '+ Create company');
    this.db
      .collection('users')
      .doc(user.id)
      .set(user)
      .then(() => this.getAllUsers())
      .then(() => this.usersСhanged(user.name))
      .then(() => user.companyList.push('+ Create company'))
  }

  getAllUsers() {
    this.db
      .collection('users')
      .valueChanges()
      .subscribe(
        users => {
          this.userList = users;
        },
        error => {
          console.log(`Error:${error}`);
        }
      );
  }


  setEmptyUser(): void {
    this.currentUser = EMPTY_USER;
  }

  //!my back-end DON'T TOUCH IT!!!!!
  regUser(user: IUser) {
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

  // getUser(user) {
  //   this.http.get(`${this.url}/api/users/${user}`).subscribe(
  //     data => {
  //       this.currentUser = data[0];
  //     },
  //     error => {
  //       this.error = error.message;
  //       console.log(error);
  //     }
  //   );
  //   if (!this.currentUser.avatar) {
  //     this.currentUser.avatar = '../../../assets/image/profile-1.jpg';
  //   }
  //   this.currentUser.registered = true;
  // }
}
