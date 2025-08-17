
function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar  */}
      <aside className="w-64 bg-white shadow-md">
        <div className="flex items-center p-5">
          <img src="image/dash.png" alt="Logo" className="w-16 h-9" />
          <div className="font-bold text-cyan-500 text-2xl">RentaRide</div>
        </div>
        <nav className="mt-8">
          <a
            href="#"
            className="block py-3 px-6 text-gray-700 hover:bg-cyan-100"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="block py-3 px-6 text-gray-700 hover:bg-cyan-100"
          >
            Users
          </a>
          <a
            href="#"
            className="block py-3 px-6 text-gray-700 hover:bg-cyan-100"
          >
            Analytics
          </a>
          <a
            href="#"
            className="block py-3 px-6 text-gray-700 hover:bg-cyan-100"
          >
            Settings
          </a>
          <a
            href="#"
            className="block py-3 px-6 text-gray-700 hover:bg-cyan-100"
          >
            LogOut
          </a>
        </nav>
      </aside>

      {/* Main Content  */}
      <div className="flex-1 flex flex-col">

        {/* Top Navbar  */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-700">Dashboard</h1>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent shadow-sm transition-all duration-200 placeholder-gray-400"
            />
            <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold">
              NS
            </div>
          </div>
        </header>

        {/* Content  */}
        <main className="p-5 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-sm text-gray-500">Total Users</p>
              <h2 className="text-3xl font-bold text-gray-700 mt-2">1,240</h2>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-sm text-gray-500">Revenue</p>
              <h2 className="text-3xl font-bold text-gray-700 mt-2">$24,500</h2>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-sm text-gray-500">New Orders</p>
              <h2 className="text-3xl font-bold text-gray-700 mt-2">320</h2>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-sm text-gray-500">Pending Tickets</p>
              <h2 className="text-3xl font-bold text-gray-700 mt-2">12</h2>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md">
            <div className="p-4 border-b font-bold text-cyan-500">
              User List
            </div>
            <table className="w-full text-left">
              <thead className="bg-cyan-50">
                <tr>
                  <th className="p-4">Name</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Role</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-4">John Doe</td>
                  <td className="p-4">john@example.com</td>
                  <td className="p-4">Admin</td>
                  <td className="p-4 text-green-600 font-bold">Active</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Jane Smith</td>
                  <td className="p-4">jane@example.com</td>
                  <td className="p-4">Editor</td>
                  <td className="p-4 text-yellow-500 font-bold">Pending</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br text-white py-3 rounded-lg shadow">
              Add User
            </button>
            <button className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br text-white py-3 rounded-lg shadow">
              Export Data
            </button>
            <button className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br text-white py-3 rounded-lg shadow ">
              Generate Report
            </button>
            <button className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br text-white py-3 rounded-lg shadow">
              Delete Records
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-6">
            <img
              src="https://img.freepik.com/premium-vector/man-profile_1083548-15963.jpg?w=1380"
              alt="Profile"
              className="w-20 h-20 rounded-full shadow"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-700">Natsu Dragg</h3>
              <p className="text-gray-500">Administrator</p>
              <button className="mt-2 bg-cyan-500 text-white px-4 py-2 rounded-lg shadow hover:bg-cyan-700">
                Edit Profile
              </button>
            </div>
          </div>

          <footer className="bg-white p-4 mt-10 text-center text-sm text-gray-400 border-t">
            © 2025 RentaRide - AdminPanel. All rights reserved.
          </footer>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
