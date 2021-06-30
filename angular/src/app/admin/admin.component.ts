import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  content = 'admin';
  constructor(private userService: UserService) { }

  ngOnInit():void{
    /*this.userService.getAdmin().subscribe(
      (data: string) => {
        this.content = data;
      },
      (err: { error: string; }) => {
        this.content = JSON.parse(err.error).message;
      }
    );*/
  }

}
