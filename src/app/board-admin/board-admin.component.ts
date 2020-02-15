import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Users } from '../models/users';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

  users: Observable<Users[]>;

  constructor(private userService: UserService, private router: Router ) {}

  ngOnInit() {
    this.reloadData();
  }
  
   employeeDetails(id: number){
    this.router.navigate(['user', id]);
  }
  
  reloadData() {
    this.users = this.userService.getUsersList();
  }

}
