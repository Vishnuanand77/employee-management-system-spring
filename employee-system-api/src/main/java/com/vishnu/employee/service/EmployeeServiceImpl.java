package com.vishnu.employee.service;

import com.vishnu.employee.entity.EmployeeEntity;
import com.vishnu.employee.model.Employee;
import com.vishnu.employee.repository.EmployeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServiceImpl implements EmployeeService{

    private EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public Employee createEmployee(Employee employee) {
        EmployeeEntity employeeEntity = new EmployeeEntity();

        // Copies all properties of employee to employeeEntity
        BeanUtils.copyProperties(employee, employeeEntity);
        // Saves the data
        employeeRepository.save(employeeEntity);

        return employee;
    }
}
