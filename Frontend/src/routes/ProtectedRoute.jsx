import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ children, allowedRoles }) => {
    const isAuthenticated = !!localStorage.getItem('token');
    const userRole = localStorage.getItem('role') || null;

    // Not logged in then home
    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    // Logged in but role not allowed then home
    if (allowedRoles && !allowedRoles.includes(userRole)) {
        return <Navigate to="/" replace />;
    }

    return children ? children : <Outlet />;
};

export default PrivateRoute;