import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {config} from '../../config'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  users : any
  isLoading = false
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.isLoading =true;
    this.http.get(config.API_URL).subscribe((res) =>{
      this.users = res
      console.log(res)
      this.isLoading =false;
    })
  }

  goToGithub(link:any){
    window.open(link, '__blank')
  }

}
