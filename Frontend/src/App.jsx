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
import Dashboard from './Components/Dashboard/Dashboard';
import DashboardHome from './Components/Dashboard/DashboardHome';
import Order from './Components/Dashboard/Order';
import SingleOrder from './Components/Dashboard/SingleOrder';
import Profile from './Components/Dashboard/Profile';
import SupportTrack from './Components/Dashboard/SupportTrack';
import ProductManagement from './Components/Dashboard/ProductManagement';
import OrderManagement from './Components/Dashboard/OrderManagement';
import CustomerProfile from './Components/Dashboard/CustomerProfile';
import AdminProfile from './Components/Dashboard/AdminProfile';

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
			<Route path="/dashboard" element={<Dashboard />}>
				<Route index element={<DashboardHome />} />
				<Route path="orders" element={<Order />} />
				<Route path="order/:id" element={<SingleOrder />} />
				<Route path="support-tickets" element={<SupportTrack />} />

				<Route path="profile" element={<CustomerProfile />} />

				{/* Admin Dashboard */}
				<Route path="admin/profile" element={<AdminProfile />} />
				<Route
					path="admin/product-management"
					element={<ProductManagement />}
				/>
				<Route path="admin/order-management" element={<OrderManagement />} />
			</Route>
		</Routes>
	);
}

export default App;
