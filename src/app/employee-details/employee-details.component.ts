import { Component } from '@angular/core';
import { Employee } from '../shared/employee.model';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {

  constructor(public empService:EmployeeService)
  {

  }

  ngOnit()
  {
    this.empService.GetEmployees().subscribe(data=>{
      this.empService.ListEmployee=data;
    });

  }
}
