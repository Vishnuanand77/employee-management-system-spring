package com.vishnu.employee.controller;

import com.vishnu.employee.model.Employee;
import com.vishnu.employee.service.EmployeeServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000") // To allow CORS
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

    @Autowired
    private final EmployeeServiceImpl employeeService;

    public EmployeeController(EmployeeServiceImpl employeeService) {
        this.employeeService = employeeService;
    }

    // POST Method to handle post request to save employee details
    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeService.createEmployee(employee);
    }

    // Method to fetch all employees
    @GetMapping("/employees")
    public List<Employee> fetchAllEmployees() {
        return employeeService.getAllEmployees();
    }

}
