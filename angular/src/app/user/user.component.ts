import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  
  constructor(private userService: UserService,private router:Router) { }

  ngOnInit():void{
    
  }
  onSubmit() {
    this.userService.addDonor(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        console.log("c",this.isSuccessful);
        
        
      },
      (err:any) => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
  


}
