import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { TokenStorageService } from '../services/token-storage.service';
interface Bloodrequest{
  id:Number;
  patientname:String;
  age:Number;
  reason:String;
  date:String;
  bloodgroup:String;
  units:Number;
  status:Number;

}
@Component({
  selector: 'app-previousrequest',
  templateUrl: './previousrequest.component.html',
  styleUrls: ['./previousrequest.component.css']
})

export class PreviousrequestComponent implements OnInit {
  private status: string[]=[];

  mail:String='';
  public d:Bloodrequest[]=[];
  constructor(private userService:UserService,private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    const e = this.tokenStorageService.getUser();
       this.mail = e.email;
    this.userService.getall(this.mail).subscribe(
      (data:Bloodrequest[])=> {
        this.d=data;
        console.log("data",this.d);
      });
  }

}
