import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import EmployeeService from '../services/EmployeeService';

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
								<tr>
									<td className='text-left px-6 py-4 whitespace-nowrap'>
										<div className='text-sm text-gray-500'>
											{employee.firstName}
										</div>
									</td>
									<td className='text-left px-6 py-4 whitespace-nowrap'>
										<div className='text-sm text-gray-500'>
											{employee.lastName}
										</div>
									</td>
									<td className='text-left px-6 py-4 whitespace-nowrap'>
										<div className='text-sm text-gray-500'>
											{employee.emailId}
										</div>
									</td>
									<td className='text-right px-6 py-4 whitespace-nowrap font-medium text-sm'>
										<a href='#' className='text-indigo-600 hover:text-indigo-800 px-4'>Edit</a>
										<a href='#' className='text-red-600 hover:text-red-800'>Delete</a>
									</td>
								</tr>
							))} {/* End of employees.map */}
						</tbody>
					)} {/* End of !loading condition*/}
				</table>
			</div>
		</div>
	)
}

export default EmployeeList