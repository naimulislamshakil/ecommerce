import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/auth/Login';
import Register from './Components/auth/Register';
import ForgetPassword from './Components/auth/ForgetPassword';
import ResetPassword from './Components/auth/ResetPassword';
import Home from './Components/Home/Home';
import SingleProduct from './Components/Home/SingleProduct';
import CartPage from './Components/Home/CartPage';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/forgot-password" element={<ForgetPassword />} />
			<Route path="/reset-password" element={<ResetPassword />} />
			<Route path="/product" element={<SingleProduct />} />
			<Route path="/cart" element={<CartPage />} />
		</Routes>
	);
}

export default App;
