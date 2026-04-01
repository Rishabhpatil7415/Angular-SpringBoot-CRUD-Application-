import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeService } from '../employee-service';
import { ActivatedRoute } from '@angular/router';
import { Router }from '@angular/router';

@Component({
  selector: 'app-update-employee',
  imports: [FormsModule],
  templateUrl: './update-employee.html',
  styleUrl: './update-employee.css',
})
export class UpdateEmployee {

  id!:number;
  constructor(private employeeService :EmployeeService, private router: Router,
    private route: ActivatedRoute){

  }

  employee:Employee = new Employee();

  ngOnInit(){
    this.id = this.route.snapshot.params[`id`];
    
    this.employeeService.getEmployeeById(this.id).subscribe(data =>{
      console.log(data);
      this.employee = data;
    })
  }
   onSubmit(){
    console.log(this.employee);
    this.updateEmployee();
  }

  updateEmployee(){
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data =>{
    //    this.employee = new Employee();
        this.goToList();
      })
  }
    goToList(){
    this.router.navigate(['/employees'])};
  
}


