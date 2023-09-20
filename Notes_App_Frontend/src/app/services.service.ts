import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { User } from './models/user';

import { Notes } from './models/notes';

 

@Injectable({

  providedIn: 'root'

})

export class ServicesService {


 

  url = "http://localhost:8082"

 

  isLoggedIn = false;

 

  constructor(private http: HttpClient) { }

 

    //loginUser

    public loginUserToken(token: any) {

      localStorage.setItem('token', token);

      return true;

    }

 

    //is login or not

    public isLogIn() {

      let tokenStr = localStorage.getItem('token');

      if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {

        return false;

      } else {

        return true;

      }

    }

 

   

  //logout

  public logout() {

    localStorage.removeItem('token');

    localStorage.removeItem('user');

    this.isLoggedIn = false;

    return true;

  }

 

    //get Token

    public getToken() {

      return localStorage.getItem('token');

    }

 

 

   

  public setUser(user: any) {

    localStorage.setItem('user', JSON.stringify(user));

  }

 

   

  public getUser() {

    let userStr = localStorage.getItem('user');

    if (userStr != null) {

      return JSON.parse(userStr);

    }

    this.logout();

    return null;

  }

 

    //generate token

    public generateToken(loginData: any) {

      return this.http.post<any>(

        'http://localhost:8082/generate-token',

        loginData

      );

    }

    public createNote(noteData:any){
      return this.http.post('http://localhost:8082/user/notes/createNote', noteData);
    }

 
 

  //current User

  public getCurrentUser() {

    return this.http.get('http://localhost:8082/current-user');

  }

 

 

   //register User

   public registerUser(user: User): Observable<any> {

    return this.http.post<any>('http://localhost:8082/user/register', user);

  }

 

  //add Note

 

  public addNote(notes: Notes): Observable<any> {

    return this.http.post<any>('http://localhost:8082/user/add-new-notes', notes);

  }

  public getAllNotes(){
  return this.http.get('http://localhost:8082/user/notes/all');
 }

 public deleteNote(id: any) {
  return this.http.delete('http://localhost:8082/user/notes/delete/' + id);
}


public getLatestNotes(){
  return this.http.get('http://localhost:8082/user/notes/latest');
}

}

