import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';
import NavBar from './components/NavBar';

function App() {
	return (
		<>
			<BrowserRouter>
				<NavBar /> {/* NavBar component that is persistently displayed*/}
				{/* Configuring routes to display different pages in different urls */}
				<Routes>
					<Route index element={<EmployeeList />} />
					<Route path="/" element={<EmployeeList />} />
					<Route path="/employeeList" element={<EmployeeList />} />
					<Route path="/addEmployee" element={<AddEmployee />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
