import React from 'react'
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';


function DashboardLayout() {
  return (
    <div className="bg-gray-100 font-sans flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Navbar />
        <main className="p-5 bg-gray-100">
          <Outlet />  {/* render the page section or content here */}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;

