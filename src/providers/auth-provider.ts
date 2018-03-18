import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as firebase from 'firebase';

import { environment } from './../environments/environment';

import { ResponseDate } from './../models/ResponseData';
import { User } from './../models/User';

@Injectable()
export class AuthProvider {

    private reqUrl: String;

    constructor(
        public http: HttpClient
    ) {
        this.reqUrl = environment.requestUrl;
    }

    private user_: User = new User();

    get user(): User {
        return this.user_;
    }

    get uid(): string {
        return this.existUser ? this.user_.uid : null;
    }

    get displayName(): string {
        return this.existUser ? this.user_.displayName : null;
    }

    get email(): string {
        return this.existUser ? this.user_.email : null;
    }

    get photoUrl(): string {
        return this.existUser ? this.user_.photoUrl : null;
    }

    get createDate(): string {
        return this.existUser ? this.user_.createDate : null;
    }

    get lastDate(): string {
        return this.existUser ? this.user_.lastDate : null;
    }

    get roleId(): number {
        return this.existUser ? this.user_.roleId : 0;
    }

    get subIdList(): Array<string> {
        return this.existUser ? this.user_.subIdList : null;
    }

    get isAuth(): boolean {
        return (this.existUser == true && this.roleId == 3) ? true : false;
    }

    get existUser(): boolean {
        return this.user_ == null ? false : true;
    }

    signInWithGoogle() {
        firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }

    signOut() {
        this.user_ = null;
        firebase.auth().signOut();
    }

    singIn(): Promise<User> {
        return this.getIdToken().then(idToken => {
          return new Promise<User>((resolve, reject) => {

            this.http.post(`${this.reqUrl}/auth/ad/sign-in-up`, null, {
              headers: new HttpHeaders().set('Authorization', idToken)
            }).subscribe(data => {

              const resData = data as ResponseDate;
              this.user_ = resData.data as User;

              if(resData.res) {
                resolve();
              } else {
                const msg: string = resData.code + ": " + resData.msg;
                console.log(msg);
                resolve();
              }

            }, err => {
              console.log(err);
              reject(err);
            });
          });
        });
    }

    getIdToken(): Promise<any> {
        return firebase.auth().currentUser.getIdToken(true);
    }

    singInTest(): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            const user: User = {
                uid: 'bnrzCFKFc0Y5EChuH3UaLfAWEf93',
                email: 'test@email',
                displayName: 'test name',
                photoUrl: null,
                createDate: '2018-02-09 19:55:44',
                lastDate: '2018-02-09 19:55:44',
                roleId: 3
            }

            this.user_ = user;

            resolve();
        });
    }

}