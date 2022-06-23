import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8082/api/v1/employees";

class EmployeeService {

    // Axios is a library that makes it easy to make HTTP requests
    // This method sends an employee object with the POST request
    saveEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    // Method to retrieve list of all employees
    getEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
    
    // Rest method to delete employee
    deleteEmployee(id) {
        return axios.delete(EMPLOYEE_API_BASE_URL + "/" + id);
    }

    // Method to get employee by id
    getEmployeeById(id) {
        return axios.get(EMPLOYEE_API_BASE_URL + "/" + id);
    }

    // Method to update employee by id
    updateEmployee(id, employee) {
        return axios.put(EMPLOYEE_API_BASE_URL + "/" + id, employee);
    }
}

export default new EmployeeService();