import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Desgination,  Employee } from './employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private myhttp:HttpClient) { }

  employeeUrl:string='https://localhost:7246/api/Employees';
  desinationUrl:string='https://localhost:7246/api/Designation';
  ListEmployee:Employee[]=[];
  ListDesignation:Desgination[]=[];

  employeeData:Employee=new Employee();

  saveEmployee()
  {
    return this.myhttp.post(this.employeeUrl,this.employeeData);
  }

  updateEmployee()
  {
    return this.myhttp.put(`${this.employeeUrl}/${this.employeeData.id}`, this.employeeData)

  }

  GetEmployees():Observable<Employee[]>
  {
      return this.myhttp.get<Employee[]>(this.employeeUrl);
  }

  GetDesginations():Observable<Desgination[]>
  {
      return this.myhttp.get<Desgination[]>(this.desinationUrl);
  }

    deleteEmployee(id:number)
    {
            return this.myhttp.delete(`${this.employeeUrl}/${id}`);
    }


}
