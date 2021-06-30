import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from "@angular/router"
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
    form: any = {};
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';
    id:number=-1;
    details:any;
    constructor(private userService: UserService,private route:ActivatedRoute,private router: Router) { }
    ngOnInit(): void {
      this.id=this.route.snapshot.params.id;
      console.log("da",this.id);
      this.userService.getById(this.id).subscribe(
        (data:any) =>{
          this.details=data;
          name:this.details.name;
          email:this.details.email;
          phonenumber:this.details.phonenumber;
          gender:this.details.gender;
          age:this.details.age;
          bloodgroup:this.details.bloodgroup;
          weight:this.details.weight;
          
        }
      );
    }
    
      
         
    
    onSubmit() {
      
      this.userService.update(this.id,this.details).subscribe(
        (data: any) => {
          console.log(data);
          
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.router.navigate(['/home']).then(result=>window.location.reload());
          
        },
        (err:any) => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );
    }
  
  
  
  
  

}
