import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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
  displayedUsers: User[] = [];
  
  userSearchForm = this.fb.group({
    name: new FormControl('', Validators.required),
    email: new FormControl(''),
    username: new FormControl('')       
  });

 
  constructor(public userService: UserService, private fb: FormBuilder) { 

  }



  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(data => this.users = data );
  }

  onSubmit() {
    
     console.warn(this.userSearchForm.value);
    
    this.displayedUsers = this.users;

    const name = this.userSearchForm.value.name
    const username = this.userSearchForm.value.username
    const email = this.userSearchForm.value.email

    if(name !== ''){
      this.displayedUsers = this.users.filter(u=> u.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
    }

    if(username !== ''){
      this.displayedUsers = this.users.filter(u=> u.username.toLocaleLowerCase().includes(username.toLocaleLowerCase()));
    }

    if(email !== ''){
      this.displayedUsers = this.users.filter(u=> u.email.toLocaleLowerCase().includes(email.toLocaleLowerCase()));
    }
  }

}
