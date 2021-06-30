import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';

interface Donor{
   id:Number;
   name:String;
   email:String;
   phonenumber:String;
   gender:String;
   age:Number;
   bloodgroup:String;
   weight:String;

}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private roles: string[]=[];
 
  showAdmin = false;
  showUser=false;
  public d:Donor[]=[];
  bloodgroup='';
  constructor(private userService:UserService,private tokenStorageService: TokenStorageService) { }

   
  ngOnInit(){
    
    const user = this.tokenStorageService.getUser();
       this.roles = user.role;
     
      this.showAdmin = this.roles.includes("ROLE_ADMIN");
      this.showUser = this.roles.includes("ROLE_USER");
      this.userService.getDonor().subscribe(

        (data:Donor[])=> {
          
          this.d=data;
        });
      }
        findby()
        {
          this.userService.findby(this.bloodgroup).subscribe(
            (data:Donor[])=> {
              this.d=data;
              console.log("data",this.d);
            });
        }
        delete(id: Number){  
          this.userService.delete(id)  
            .subscribe(  
              data => {  
                console.log(data);  
                //this.router.navigate(['']);
                location.reload();
            });
          }
          
          
          
        }
        
      
  


