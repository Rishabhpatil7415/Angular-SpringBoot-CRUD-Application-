package com.angularspringboot.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.angularspringboot.demo.exception.ResourceNotFoundException;
import com.angularspringboot.demo.model.Employee;
import com.angularspringboot.demo.repository.EmployeeRepository;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {
	
  @Autowired	
  public EmployeeRepository employeeRepository;
  
  @GetMapping("/employees")
  public List<Employee> getAllEmployees(){
	  return employeeRepository.findAll();
  }
  
  @PostMapping("/employees")
  public Employee createEmployee(@RequestBody Employee e) {
	  return employeeRepository.save(e);
  }
  
  //get employee by id
  @GetMapping("/employees/{id}")
  public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
	  Employee employee = employeeRepository.findById(id).
			  orElseThrow(()-> new ResourceNotFoundException("Employee id not found :"+id));
	  return ResponseEntity.ok(employee);
   }
  
  //update employee by id
  @PutMapping("/employees/{id}")
  public ResponseEntity<Employee> updateEmployee(@PathVariable Long id,@RequestBody Employee e){
	  Employee employee = employeeRepository.findById(id).
			  orElseThrow(()-> new ResourceNotFoundException("Employee id not found :"+id));
	  
	  employee.setFirstname(e.getFirstname());
	  employee.setLastname(e.getLastname());
	  employee.setEmail(e.getEmail());
	  
	  Employee e1 = employeeRepository.save(employee);
	  return ResponseEntity.ok(e1);
	  
  }
  
  //delete employee based on id
  @DeleteMapping("/employees/{id}")
  public ResponseEntity<Map<String,Boolean>> deleteEmployee(@PathVariable Long id){
	  
	  Employee employee = employeeRepository.findById(id).
			  orElseThrow(()-> new ResourceNotFoundException("Employee id not found :"+id));
	  
	  Map<String,Boolean> m = new HashMap<>();
	    employeeRepository.delete(employee);
	    m.put("deleted",Boolean.TRUE);
	    return ResponseEntity.ok(m);
  }
  
}