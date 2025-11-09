import React from 'react'
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans"> {/* ensure full viewport height */}
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-64 min-h-screen"> {/* make main stretch full height */}
          <main className="p-5">
            <Outlet />  {/* render the page section or content here */}
          </main>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;

