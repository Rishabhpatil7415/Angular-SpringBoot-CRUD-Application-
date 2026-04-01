import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeList } from './employee-list/employee-list';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular-SpringBoot-project');
}
