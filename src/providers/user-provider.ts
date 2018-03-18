import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from './../environments/environment';

import { AuthProvider } from './auth-provider';

import { ResponseDate } from './../models/ResponseData';
import { User } from './../models/User';
import { RoleSubCat } from './../models/RoleSubCat';
import { WordCount } from './../models/WordCount';

@Injectable()
export class UserProvider {

    private reqUrl: String;

    constructor(
        public http: HttpClient,
        private _auth: AuthProvider
    ) {
        this.reqUrl = environment.requestUrl;
    }

    updateUserRole(uid: string, roleId: number): Promise<any> {
        return this._auth.getIdToken().then(idToken => {
            return new Promise<any>((resolve, reject) => {

                const data = {
                    uid: uid,
                    roleId: roleId
                }

                this.http.post(`${this.reqUrl}/user/ad/update/role`, data, {
                    headers: new HttpHeaders().set('Authorization', idToken)
                }).subscribe(data => {

                    const resData = data as ResponseDate;

                    if (resData.res) {
                        resolve();
                    } else {
                        const msg: string = resData.code + ": " + resData.msg;
                        reject(msg);
                    }

                }, err => {
                    reject(err);
                });
            });
        });
    }

    deleteUser(uid: string): Promise<any> {
        return this._auth.getIdToken().then(idToken => {
            return new Promise<any>((resolve, reject) => {

                const data = {
                    uid: uid
                }

                this.http.post(`${this.reqUrl}/user/ad/delete`, data, {
                    headers: new HttpHeaders().set('Authorization', idToken)
                }).subscribe(data => {

                    const resData = data as ResponseDate;

                    if (resData.res) {
                        resolve();
                    } else {
                        const msg: string = resData.code + ": " + resData.msg;
                        reject(msg);
                    }

                }, err => {
                    reject(err);
                });
            });
        });
    }

    getUser(uid: string): Promise<Map<string, any>> {
        return this._auth.getIdToken().then(idToken => {
            return new Promise<Map<string, any>>((resolve, reject) => {

                const data = {
                    uid: uid
                }

                this.http.post(`${this.reqUrl}/user/ad/detail`, data, {
                    headers: new HttpHeaders().set('Authorization', idToken)
                }).subscribe(data => {

                    const resData = data as ResponseDate;

                    if (resData.res) {
                        resolve(resData.data as Map<string, any>);
                    } else {
                        const msg: string = resData.code + ": " + resData.msg;
                        reject(msg);
                    }

                }, err => {
                    reject(err);
                });
            });
        });
    }

    getUserList(): Promise<Array<User>> {
        return this._auth.getIdToken().then(idToken => {
            return new Promise<Array<User>>((resolve, reject) => {

                this.http.post(`${this.reqUrl}/user/ad/list`, null, {
                    headers: new HttpHeaders().set('Authorization', idToken)
                }).subscribe(data => {

                    const resData = data as ResponseDate;

                    if (resData.res) {
                        resolve(resData.data as Array<User>);
                    } else {
                        const msg: string = resData.code + ": " + resData.msg;
                        reject(msg);
                    }

                }, err => {
                    reject(err);
                });
            });
        });
    }

    getRolesByUser(uid: string): Promise<Array<RoleSubCat>> {
        return this._auth.getIdToken().then(idToken => {
            return new Promise<Array<RoleSubCat>>((resolve, reject) => {

                const data = {
                    uid: uid
                }

                this.http.post(`${this.reqUrl}/user/ad/roles`, data, {
                    headers: new HttpHeaders().set('Authorization', idToken)
                }).subscribe(data => {

                    const resData = data as ResponseDate;

                    if (resData.res) {
                        resolve(resData.data as Array<RoleSubCat>);
                    } else {
                        const msg: string = resData.code + ": " + resData.msg;
                        reject(msg);
                    }

                }, err => {
                    reject(err);
                });
            });
        });
    }

    updateRolesByUser(uid: string, roleSubCat: Array<RoleSubCat>): Promise<any> {
        return this._auth.getIdToken().then(idToken => {
            return new Promise<any>((resolve, reject) => {

                const reqData = {
                    uid: uid,
                    roleSubCat: roleSubCat
                }

                this.http.post(`${this.reqUrl}/user/ad/roles/update`, reqData, {
                    headers: new HttpHeaders().set('Authorization', idToken)
                }).subscribe(data => {

                    const resData = data as ResponseDate;

                    if (resData.res) {
                        resolve();
                    } else {
                        const msg: string = resData.code + ": " + resData.msg;
                        reject(msg);
                    }

                }, err => {
                    reject(err);
                });
            });
        });
    }

    getWordCountGroupBySub(uid: String): Promise<Array<WordCount>> {
        return this._auth.getIdToken().then(idToken => {
            return new Promise<Array<WordCount>>((resolve, reject) => {

                const reqData = {
                    uid: uid
                }

                this.http.post(`${this.reqUrl}/home/word/count`, reqData, {
                    headers: new HttpHeaders().set('Authorization', idToken)
                }).subscribe(data => {

                    const resData = data as ResponseDate;

                    if (resData.res) {
                        resolve(resData.data as Array<WordCount>);
                    } else {
                        const msg: string = resData.code + ": " + resData.msg;
                        console.log(msg);
                        reject(msg);
                    }

                }, err => {
                    console.log(err);
                    reject(err);
                });
            });
        });
    }

}