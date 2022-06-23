package com.vishnu.employee.controller;

import com.vishnu.employee.model.Employee;
import com.vishnu.employee.service.EmployeeServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    // Method to delete an employee
    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id) {
        boolean deleted = false; // False

        deleted = employeeService.deleteEmployee(id);

        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", deleted);

        return  ResponseEntity.ok(response);
    }

    // Method to get employee by ID
    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
        Employee employee = null;
        employee = employeeService.getEmployeeById(id);

        return  ResponseEntity.ok(employee);
    }

    // Method to upload data for an employee
    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
        employee = employeeService.updateEmployee(id, employee);

        return  ResponseEntity.ok(employee);
    }

}
