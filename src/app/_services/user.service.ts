import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseEmployeesUrl = 'http://localhost:8080/user';
  private baseAdminUrl = 'http://localhost:8080/admin';
  private createtodo = 'http://localhost:8080/create_employee';

  constructor(private http: HttpClient) { }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseEmployeesUrl}/${id}`, value);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.createtodo}`, employee);
  }
  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseEmployeesUrl}/${id}`);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseEmployeesUrl}/${id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseEmployeesUrl}`);
  }

  getUsersList(): Observable<any> {
    return this.http.get(`${this.baseAdminUrl}`);
  }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }


}
