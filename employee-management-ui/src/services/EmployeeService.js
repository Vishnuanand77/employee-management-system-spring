import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8082/api/v1/employees";

class EmployeeService {

    // Axios is a library that makes it easy to make HTTP requests
    // This method sends an employee object with the POST request
    saveEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

}

export default new EmployeeService();