import React, { useState } from 'react';
import { Outlet, NavLink, Link, useLocation } from 'react-router-dom';
import {
	Home,
	Box,
	ShoppingBasket,
	ChevronDown,
	Headset,
	LogOut,
	ArchiveRestore,
	UserRoundPen,
} from 'lucide-react';
import Topbar from '../Common/Topbar';
import Footer from '../Common/Footer';

const Dashboard = () => {
	const location = useLocation();
	const [sidebarOpen, setSidebarOpen] = useState(true);

	const [submenuOpen, setSubmenuOpen] = useState(false); // sidebar dropdown

	const toggleSubmenu = () => setSubmenuOpen(!submenuOpen);

	const menuItems = [
		{ icon: <Home className="w-5 h-5" />, label: 'Home', path: '/dashboard' },
		{
			icon: <Box className="w-5 h-5" />,
			label: 'Orders',
			path: '/dashboard/orders',
		},
		{
			icon: <UserRoundPen className="w-5 h-5" />,
			label: 'Profile',
			path: '/dashboard/profile',
		},
		{
			icon: <Headset className="w-5 h-5" />,
			label: 'Support Tickets',
			path: '/dashboard/support-tickets',
		},
		{
			icon: <ShoppingBasket className="w-5 h-5" />,
			label: 'Product Management',
			path: '/dashboard/admin/product-management',
		},
		{
			icon: <ArchiveRestore className="w-5 h-5" />,
			label: 'Order Management',
			path: '/dashboard/admin/order-management',
		},
	];
	return (
		<div>
			<Topbar />
			<div className="flex h-screen bg-gray-100">
				{/* Sidebar */}
				<aside
					className={`${
						sidebarOpen ? 'w-64' : 'w-20'
					} bg-white shadow-lg flex flex-col transition-all duration-300`}
				>
					<nav className="flex-1 p-2 space-y-1 pt-10">
						{menuItems.map((item) => (
							<div key={item.label}>
								<Link
									to={item.path}
									onClick={() => {
										if (item.hasSubmenu) toggleSubmenu();
									}}
									className={`flex items-center justify-between gap-3 w-full p-2 rounded-lg transition-colors ${
										location.pathname === item.path
											? 'bg-blue-500 text-white'
											: 'text-gray-700 hover:bg-blue-100 hover:text-blue-700'
									}`}
								>
									<div className="flex items-center gap-3">
										{item.icon}
										{sidebarOpen && <span>{item.label}</span>}
									</div>
									{item.hasSubmenu && sidebarOpen && (
										<ChevronDown
											className={`w-4 h-4 transition-transform ${
												submenuOpen ? 'rotate-180' : ''
											}`}
										/>
									)}
								</Link>

								{/* Submenu */}
								{item.hasSubmenu && submenuOpen && sidebarOpen && (
									<div className="pl-12 mt-1 space-y-1">
										{item.submenu.map((subItem) => (
											<button
												key={subItem}
												className="block w-full text-left px-3 py-1 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700"
											>
												{subItem}
											</button>
										))}
									</div>
								)}
							</div>
						))}
						<button className="flex items-center justify-start gap-3 w-full p-2 rounded-lg transition-colors text-gray-700 hover:bg-blue-100 hover:text-blue-700">
							<LogOut className="w-5 h-5" />
							Logout
						</button>
					</nav>
				</aside>

				{/* Main Content */}
				<div className="flex-1 flex flex-col">
					{/* Page Content */}
					<main className="flex-1 p-6 overflow-y-auto">
						<Outlet />
					</main>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Dashboard;
