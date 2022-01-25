import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import * as firebase from 'firebase';
import {AppUser} from "./models/app-user";
import { AngularFireObject, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    })
  }

  get(uid: string): AngularFireObject<AppUser> {
    return this.db.object('/users/' + uid);
  }
}
