import { Component, OnInit } from '@angular/core';
import { Worksheet } from '../models/worksheet';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-worksheet-admin',
  templateUrl: './worksheet-admin.component.html',
  styleUrls: ['./worksheet-admin.component.css']
})
export class WorksheetAdminComponent implements OnInit {
  idd: number;

  username: String;
  worksheets: Observable<Worksheet[]>;

  submitted = false;

  worksheet: Worksheet;
  id: any;
  provjera: boolean;
  ime:String;

  constructor(private route: ActivatedRoute,
    private employeeService: UserService,private router: Router) { }

  ngOnInit() {
    this.worksheet = new Worksheet();
    this.idd = this.route.snapshot.params['id'];
  	this.reloadData();   
  }

  reloadData() {
    this.worksheets = this.employeeService.getEmployeesList();
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }//
  updateEmployee() {
    this.employeeService.updateEmployee(this.worksheet.id, this.worksheet)
      .subscribe(data => console.log(data), error => console.log(error));
    this.worksheet = new Worksheet();
  }

  Action(id: number, ime:string){
    this.worksheet.id=id;
    this.provjera = ime==="Accepted" ? true : false;
    this.worksheet.status = this.provjera === true ? "Declined" : "Accepted";
    this.updateEmployee();  
  }
  

}