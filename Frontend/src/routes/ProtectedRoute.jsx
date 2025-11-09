import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ children, allowedRoles }) => {
    const isAuthenticated = !!localStorage.getItem('token');
    const userRole = localStorage.getItem('role') || null;

    // Not logged in -> home
    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    // Logged in but role not allowed -> home
    if (allowedRoles && !allowedRoles.includes(userRole)) {
        return <Navigate to="/" replace />;
    }

    return children ? children : <Outlet />;
};

export default PrivateRoute;