import { Component } from '@angular/core';
import { Employee } from '../employee'
import {NgFor} from '@angular/common';
import { EmployeeService } from '../employee-service';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-employee-list', 
  standalone :true,
  imports: [NgFor],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})

export class EmployeeList {
  employees: Employee[] = [];
    // { id: 1, firstname: 'Rishabh', lastname: 'Patil', email: 'rishabh@example.com' },
    // { id: 2, firstname: 'John', lastname: 'Doe', email: 'john@example.com' }
  
    ngOnInit(){
      this.employeeService.getEmployeesList().subscribe(data => {
       this.employees = data;
       this.cdr.detectChanges(); // 3. Manually tell Angular to update the UI
      });
    }

    constructor(private employeeService :EmployeeService,private router :Router,
      private cdr: ChangeDetectorRef // 2. Inject it
    ){ }
  
    private getEmployees(){
      this.employeeService.getEmployeesList().subscribe(data =>{
        console.log(data);
        this.employees= data;
      });
    }

    updateEmployee(id:number)
    {
      this.router.navigate(['update-employee',id]);
    }

    employeeDetails(id:number){
      this.router.navigate(['employee-details',id]);
    }

    deleteEmployee(id:number){
      this.employeeService.deteteEmployee(id).subscribe(data =>{
        console.log(data);
       this.getEmployees();
      });
    }
}


