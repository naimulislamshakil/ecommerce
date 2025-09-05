import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/auth/Login';
import Register from './Components/auth/Register';
import ForgetPassword from './Components/auth/ForgetPassword';
import ResetPassword from './Components/auth/ResetPassword';

function App() {
	const [count, setCount] = useState(0);

	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/forgot-password" element={<ForgetPassword />} />
			<Route path="/reset-password" element={<ResetPassword />} />
		</Routes>
	);
}

export default App;
