import React, { useState } from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import {
	Home,
	Box,
	Folder,
	Settings,
	Bell,
	User,
	Menu,
	ChevronDown,
	NotepadText,
	ChartLine,
	BookOpenCheck,
	Landmark,
	LibraryBig,
} from 'lucide-react';
import Topbar from '../Common/Topbar';
import Footer from '../Common/Footer';

const Dashboard = () => {
	const [sidebarOpen, setSidebarOpen] = useState(true);
	const [activeTab, setActiveTab] = useState('Home');
	const [dropdownOpen, setDropdownOpen] = useState(false); // topbar dropdown
	const [submenuOpen, setSubmenuOpen] = useState(false); // sidebar dropdown

	const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
	const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
	const toggleSubmenu = () => setSubmenuOpen(!submenuOpen);

	const menuItems = [
		{ icon: <Home className="w-5 h-5" />, label: 'Home', path: '/dashboard' },
		{
			icon: <Box className="w-5 h-5" />,
			label: 'Orders',
			path: '/dashboard/orders',
		},
		{
			icon: <NotepadText className="w-5 h-5" />,
			label: 'Class Schedule',
			path: '/class-schedule',
		},
		{
			icon: <ChartLine className="w-5 h-5" />,
			label: 'Grades & Report Cards',
			path: '/report-cards',
		},
		{
			icon: <BookOpenCheck className="w-5 h-5" />,
			label: 'Homework & Assignments',
			path: '/homework-assignments',
		},
		{
			icon: <Landmark className="w-5 h-5" />,
			label: 'Fee Status',
			path: '/fee-status',
		},
		{
			icon: <LibraryBig className="w-5 h-5" />,
			label: 'Library Access',
			path: '/library-access',
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
					<div
						className={
							sidebarOpen
								? 'flex items-center justify-end p-4'
								: 'flex items-center justify-center p-4'
						}
					>
						<Menu className="w-6 h-6 cursor-pointer" onClick={toggleSidebar} />
					</div>

					<nav className="flex-1 p-2 space-y-1">
						{menuItems.map((item) => (
							<div key={item.label}>
								<Link
									to={item.path}
									onClick={() => {
										setActiveTab(item.label);
										if (item.hasSubmenu) toggleSubmenu();
									}}
									className={`flex items-center justify-between gap-3 w-full p-2 rounded-lg transition-colors ${
										activeTab === item.label
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
					</nav>

					<div className="p-4">{sidebarOpen && 'Logout'}</div>
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
