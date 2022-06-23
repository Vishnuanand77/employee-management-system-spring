import { editableInputTypes } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import EmployeeService from '../services/EmployeeService';
import Employee from './Employee';

const EmployeeList = () => {

	// addEmployee route hook
	const navigate = useNavigate();

	// Used to check if data is loaded or not
	const [loading, setLoading] = useState(true);
	// State to update the list of employees after fetching data from java api
	const [employees, setEmployees] = useState(null);

	// Fetchs the data from the API
	// Async await method as service may take some time to respond
	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await EmployeeService.getEmployees(); // API Call
				setEmployees(response.data); // Setting the data
			} catch (error) {
				console.log(error);
			}
			setLoading(false);
		};
		fetchData();
	}, []);

	// Delete employee function is passed as props to the child.
		// This is done so that the child can call the function to delete the employee and then
		// return the control back to the parent.
	const deleteEmployee = async (event, id) => {
		event.preventDefault();
		EmployeeService.deleteEmployee(id) // Delete API Call
		.then((response) => {
			// If data is present in the table, then remove the row from the table
			if(employees) {
				setEmployees((prevElement) => {
					return prevElement.filter(employee => employee.id !== id); // Flitering the list of employees and removing the one with the id passed to the function
				});
			}
		});
	};

	return (
		<div className='container mx-auto my-8'>
			<div className='h-12'>
				<button onClick={() => navigate("/addEmployee")} className='rounded bg-slate-600 text-white px-6 py-2 font-semibold'>Add Employee</button>
			</div>
			<div className='flex shadow border-b'>
				<table className='min-w-full'>
					<thead className='bg-gray-100'>
						<tr>
							<th className='text-left font-medium text-gray-500 uppercase tracking-wider py-2 px-6'>First Name</th>
							<th className='text-left font-medium text-gray-500 uppercase tracking-wider py-2 px-6'>Last Name</th>
							<th className='text-left font-medium text-gray-500 uppercase tracking-wider py-2 px-6'>Email Id</th>
							<th className='text-right font-medium text-gray-500 uppercase tracking-wider py-2 px-6'>Actions</th>
						</tr>
					</thead>
					{!loading && (
						<tbody className='bg-white'>
							{employees.map(employee => (
								<Employee 
									employee={employee} 
									key={employee.id}
									deleteEmployee={deleteEmployee}></Employee>
							))}{/* End of employees.map */}
						</tbody>
					)}{/* End of !loading condition*/}
				</table>
			</div>
		</div>
	)
}

export default EmployeeList