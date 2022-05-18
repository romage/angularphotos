import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  users: User[] = [];
 
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(data => this.users = data );
  }

}
