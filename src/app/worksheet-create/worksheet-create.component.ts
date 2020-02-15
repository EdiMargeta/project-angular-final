import { Component, OnInit } from '@angular/core';
import { Worksheet } from '../models/worksheet';
import { UserService } from '../_services/user.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-worksheet-create',
  templateUrl: './worksheet-create.component.html',
  styleUrls: ['./worksheet-create.component.css']
})
export class WorksheetCreateComponent implements OnInit {

  employee: Worksheet = new Worksheet();
  submitted = false;
  currentUser: any;
 
  constructor(private employeeService: UserService,private tokenStorageService: TokenStorageService,
    private router: Router) { }
    
  ngOnInit() {   
     this.currentUser = this.tokenStorageService.getUser()
      this.employee.userid = this.currentUser.id
  }
  
  save() {
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Worksheet();
  }

  onSubmit() {
    this.submitted = true;
    this.save();      
  }
}