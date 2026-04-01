import { Component } from '@angular/core';
import { Employee } from '../employee'
import {NgFor} from '@angular/common';
import { EmployeeService } from '../employee-service';

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
  
    ngOnInit():void{
       this.getEmployees();
    }

    constructor(private employeeService :EmployeeService){ }
  
    private getEmployees(){
      this.employeeService.getEmployeesList().subscribe(data =>{
        console.log(data);
        this.employees= data;
      });
    }
}


