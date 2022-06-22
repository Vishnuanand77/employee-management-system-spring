package com.vishnu.employee.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data // Lombok annotation that takes care of getters and setters
@Table(name = "employee")
public class EmployeeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String firstName;
    private String lastName;
    private String emailId;
}
