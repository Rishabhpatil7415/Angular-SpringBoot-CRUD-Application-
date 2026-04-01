import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee-service';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  imports: [],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css',
})
export class EmployeeDetails implements OnInit {

  id!: number;
  employee!: Employee;
  constructor(private route: ActivatedRoute, private employeService: EmployeeService,
    private cdr: ChangeDetectorRef // 2. Inject it
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employee = new Employee();
    this.employeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
       this.cdr.detectChanges(); // 3. Manually tell Angular to update the UI
    });
  }
}
