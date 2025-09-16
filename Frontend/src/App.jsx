import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/auth/Login';
import Register from './Components/auth/Register';
import ForgetPassword from './Components/auth/ForgetPassword';
import ResetPassword from './Components/auth/ResetPassword';
import Home from './Components/Home/Home';
import SingleProduct from './Components/Home/SingleProduct';
import CartPage from './Components/Home/CartPage';
import CheckOut from './Components/Home/CheckOut';
import Thankyou from './Components/Home/Thankyou';
import AllProduct from './Components/AllProduct/AllProduct';

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
			<Route path="/ckeckout" element={<CheckOut />} />
			<Route path="/payment-complete" element={<Thankyou />} />
			<Route path="/shop-all" element={<AllProduct />} />
		</Routes>
	);
}

export default App;
