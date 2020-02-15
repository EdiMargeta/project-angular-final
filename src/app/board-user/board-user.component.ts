import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Worksheet } from '../models/worksheet';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})

export class BoardUserComponent implements OnInit {

  employees: Observable<Worksheet[]>;
  currentUser: any;

  constructor(private employeeService: UserService,private tokenStorageService: TokenStorageService,
    private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.currentUser = this.tokenStorageService.getUser()
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
  }

}

