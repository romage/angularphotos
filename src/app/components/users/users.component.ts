import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = this.userService.getAllUsers();

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    //this.userService.getAllUsers().subscribe(data => this.users = data );
    // this.users = this.userService.getAllUsers();
  }


}
