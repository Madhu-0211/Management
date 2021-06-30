import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service'
import {Router} from "@angular/router"
@Component({
  selector: 'app-bloodrequest',
  templateUrl: './bloodrequest.component.html',
  styleUrls: ['./bloodrequest.component.css']
})
export class BloodrequestComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  email:String='';
  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
    
  }
  onSubmit() {
    this.isSuccessful = true;
    this.userService.addRequest(this.form).subscribe(
      data => {
        
        console.log(data);
        
        this.isSignUpFailed = false;
        console.log("c",this.isSuccessful);
        this.router.navigate(['/home']).then(result=>window.location.reload());
        
      },
      (err:any) => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
