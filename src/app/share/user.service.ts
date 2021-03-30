import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
// import axios from 'axios';
import axios from "src/utils/axios"


@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL: string = environment.api_url;
  constructor() { }

  //--get all user
  async getUsers(){
    try {
      const res = await axios.get(`${this.apiURL}/api/users`);
      console.log('res.data-', res.data);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  }
  //--get one user

  //--create new user
  async register(payload){
    //--add username and role
    payload.username = payload.email; //--we will using email for username
    payload.role = 'user'; //--defaul set to user role
    try {
      const res = await axios.post(`${this.apiURL}/api/auth/signup`, payload);
      // console.log('res-', res);
      if(res){
        return res;
      }
    } catch (error) {
      console.log(error);
      // console.error(error);
    }
  }

  //--user login
  async userLogin(payload){
    try {
      const res = await axios.post(`${this.apiURL}/api/auth/signin`, payload);
      // console.log('res-', res);
      if(res){
        return res;
      }
    } catch (error) {
      console.log(error);
      // console.error(error);
    }
  }

  //--Admin login
  async adminLogin(payload){
    try {
      const res = await axios.post(`${this.apiURL}/api/auth/signin`, payload);
      if(res){
        return res;
      }
    }
    catch (error) {
      // console.log(error);
      console.error(error);
    }
  }

  //--update user by id
  //--delete user by id

  getUser(){
    if(sessionStorage.getItem("user-data")){
      var user = JSON.parse(sessionStorage.getItem("user-data"));
    }
    return user ? user.accessToken : false;
  }

  getAdmin(){
    if(sessionStorage.getItem("admin-data")){
      var admin = JSON.parse(sessionStorage.getItem("admin-data"));
    }
    return admin ? admin.accessToken : false;
  }
}
