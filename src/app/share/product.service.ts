import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/share/user.service';

// import axios from 'axios';
import axios from "src/utils/axios"

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiURL: string = environment.api_url;
  constructor(
    private userService:UserService,
  ) {

  }

  //--get all user
  // async getAll(type='user'){
  //   try {
  //     let _headers = {
  //       headers: { 'x-access-token': (type === 'user') ? this.userService.getUser() : this.userService.getAdmin() }
  //     }
  //     console.log('_headers-', _headers);
  //     // // const res = await axios.get(`${this.apiURL}/api/product`);
  //     const res = await axios.get(`${this.apiURL}/api/product`, _headers);
  //     console.log('res.data-', res.data);
  //     return res.data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  async getAll(){
    try {
      const res = await axios.get(`${this.apiURL}/api/product`);
      console.log('res.data-', res.data);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getOne(id=0){
    try {
      const res = await axios.get(`${this.apiURL}/api/product/${id}`);
      console.log('res.data-', res.data);
      return res.data;
    } catch (error) {
      // console.error(error);
      console.log(error);
    }
  }

}
