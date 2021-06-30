import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';
interface Donor{
  id:Number;
  name:String;
  email:String;
  phonenumber:String;
  date:String;
  gender:String;
  age:Number;
  bloodgroup:String;
  weight:String;

}
@Component({
  selector: 'app-donorrequest',
  templateUrl: './donorrequest.component.html',
  styleUrls: ['./donorrequest.component.css']
})
export class DonorrequestComponent implements OnInit {
  public d:Donor[]=[];
  private roles: string[]=[];
  details:any;
  showAdmin = false;
  showUser=false;
  constructor(private userService:UserService,private tokenStorageService: TokenStorageService) { }
  
  ngOnInit(){
    const user = this.tokenStorageService.getUser();
       this.roles = user.role;
     
      this.showAdmin = this.roles.includes("ROLE_ADMIN");
      this.showUser = this.roles.includes("ROLE_USER");
    this.userService.getbystatus().subscribe(
      (data:Donor[])=> {
        this.d=data;
        console.log("data",this.d);
      });
  
  }
  acceptDonor(id:Number)
  {
    this.userService.getById(id).subscribe(
      (data:any) =>{
        this.details=data;
        console.log("details",this.details);
      });
    this.userService.acceptDonor(id,this.details).subscribe(
      (data:any)=> {
        
        console.log(data);
        location.reload();
      });
   
  }
  rejectDonor(id: Number){  
    this.userService.rejectDonor(id)  
      .subscribe(  
        data => {  
          console.log(data);  
          //this.router.navigate(['']);
          location.reload();
        
      });
    }
  
          

}
