import React from 'react'
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans"> 
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-64 min-h-screen"> 
          <main className="p-5">
            <Outlet />  
          </main>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;

