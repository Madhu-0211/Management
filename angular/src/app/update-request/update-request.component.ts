import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

interface Bloodrequest{
  id:Number;
  email:String;
  patientname:String;
  age:Number;
  reason:String;
  date:String;
  bloodgroup:String;
  units:Number;
  status:Number;

}
@Component({
  selector: 'app-update-request',
  templateUrl: './update-request.component.html',
  styleUrls: ['./update-request.component.css']
})
export class UpdateRequestComponent implements OnInit {
  private status: string[]=[];
  public d:Bloodrequest[]=[];
  details:any;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.checkrequest().subscribe(
      (data:Bloodrequest[])=> {
        this.d=data;
        
      });
  }
  
  acceptRequest(id:Number)
  {
    
       this.userService.getId(id).subscribe(
        (data:any)=> {
          this.details=data;
          console.log("data",this.details);
        });
    this.userService.acceptRequest(id,this.details).subscribe(
      (data:any)=> {
        
        console.log(data);
        location.reload();
      });
   
  }
  rejectRequest(id:Number)
  {
    
       this.userService.getId(id).subscribe(
        (data:any)=> {
          this.details=data;
          console.log("data",this.details);
          
        });
    this.userService.rejectRequest(id,this.details).subscribe(
      (data:any)=> {
        
        console.log(data);
        location.reload();
      });
   
  }

}
