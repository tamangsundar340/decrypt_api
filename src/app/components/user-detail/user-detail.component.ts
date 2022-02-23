import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { config } from '../../config'
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  id = ""
  users: any;
  user: any;
  user_list : any;

  ngOnInit(): void {
    // this.id = this.route.snapshot.params[('id')]
    this.getUserDetail(this.route.snapshot.params[('id')])
    this.decryptData()
  }


  getUserDetail(i:number) {
    this.http.get(config.DETAIL_API_URL+i).subscribe((user) => {
      this.users = user
      console.warn("USERS DETAIL = ",this.users)
      const userinfo = CryptoJS.AES.encrypt(JSON.stringify(this.users), 'mysecret_key').toString()
      sessionStorage.setItem('user-detail', JSON.stringify(userinfo))
    })
  }


  decryptData() {
    const getData = sessionStorage.getItem('user-detail')
    if (getData === null) {
      console.warn("Data is null")
    } else {
      const eText = JSON.parse(getData).toString()
      const decryptedText = CryptoJS.AES.decrypt(eText, 'mysecret_key');
      const decryptedData = JSON.parse(decryptedText.toString(CryptoJS.enc.Utf8));
      this.user_list = decryptedData
    }

  }


}
