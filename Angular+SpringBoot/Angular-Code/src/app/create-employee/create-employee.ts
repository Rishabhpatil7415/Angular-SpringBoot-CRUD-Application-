import { Component } from '@angular/core';
import { Employee } from '../employee';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  imports: [FormsModule],
  standalone: true,  
  templateUrl: './create-employee.html',
  styleUrl: './create-employee.css',
})
export class CreateEmployee {

  employee : Employee =new Employee();

  constructor(private employeeService : EmployeeService,private router :Router){ }

  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe( data =>{
    console.log(data);
    this.goToEmployeeList();
    });
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
}
